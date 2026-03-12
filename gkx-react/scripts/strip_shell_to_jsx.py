#!/usr/bin/env python3
"""Convert a prototype HTML file into a shell-stripped JSX component.

This generates a *starter* JSX file:
- Extracts the page content under the main scroll container.
- Converts class->className, for->htmlFor.
- Removes inline event attributes (onclick/onchange/...) and <script> blocks.

Then you hand-migrate interactions into React handlers.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

VOID_TAGS = {
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
}


def comp_name(html_filename: str) -> str:
    base = html_filename.replace(".html", "")
    parts = re.split(r"[^a-zA-Z0-9]+", base)
    return "".join(p[:1].upper() + p[1:] for p in parts if p)


def extract_content(full: str) -> str:
    marker = '<div class="flex-1 overflow-y-auto">'
    i = full.find(marker)
    if i != -1:
        rest = full[i + len(marker) :]
        # The first child is typically the actual page container.
        first_lt = rest.find("<")
        rest = rest[first_lt:] if first_lt != -1 else rest
        # Stop before the shell tail (<style> / </body> / </html>) so we don't pull shell CSS.
        # This is best-effort; the remaining DOM must still be validated per page.
        for stopper in ("<style", "</body>", "</html>"):
            end = rest.find(stopper)
            if end != -1:
                return rest[:end]
        return rest

    m = re.search(r"<main[^>]*>([\s\S]*?)</main>", full)
    if m:
        return m.group(1)

    m = re.search(r"<body[^>]*>([\s\S]*?)</body>", full)
    return m.group(1) if m else full


def html_to_jsx(s: str) -> str:
    # Drop scripts completely
    s = re.sub(r"<script[\s\S]*?</script>", "", s, flags=re.IGNORECASE)

    # Drop inline event handlers like onclick="..."
    s = re.sub(r"\son[a-zA-Z]+=\"[^\"]*\"", "", s)

    # Attributes
    s = s.replace('class="', 'className="')
    s = s.replace(' for="', ' htmlFor="')

    # HTML comments -> JSX comments (best-effort)
    s = s.replace("<!--", "{/*").replace("-->", "*/}")

    # Self-close void tags for JSX
    def repl_tag(m: re.Match) -> str:
        tag = m.group(1)
        attrs = m.group(2) or ""
        if tag.lower() in VOID_TAGS:
            # If already self-closed, keep as-is.
            if attrs.rstrip().endswith("/"):
                return f"<{tag}{attrs}>"
            return f"<{tag}{attrs} />"
        return m.group(0)

    s = re.sub(r"<([a-zA-Z0-9:-]+)([^>]*)>", repl_tag, s)

    return s.strip()


def main() -> int:
    if len(sys.argv) != 3:
        print("usage: strip_shell_to_jsx.py <input.html> <out.jsx>")
        return 2

    in_html, out_jsx = sys.argv[1], sys.argv[2]
    p = Path(in_html)
    full = p.read_text(encoding="utf-8", errors="ignore")

    content = extract_content(full)
    jsx = html_to_jsx(content)

    name = comp_name(p.name)
    out = Path(out_jsx)
    out.parent.mkdir(parents=True, exist_ok=True)

    # Indent for readability
    indented = "\n".join("      " + line for line in jsx.splitlines())

    # If extraction accidentally left extra unclosed wrappers, drop them here.
    # This is a stopgap; pages should be validated and fixed properly.
    indented = indented.replace("</main></div></div></div>", "</main>")
    indented = indented.replace("</div></div></div></div>", "</div>")

    out.write_text(
        f"// Source: gkx-prototype/{p.name}\n"
        "// Shell stripped: ONLY page content rendered inside Layout <Outlet />.\n\n"
        f"export default function {name}() {{\n"
        "  return (\n"
        "    <>\n"
        f"{indented}\n"
        "    </>\n"
        "  )\n"
        "}\n",
        encoding="utf-8",
    )

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
