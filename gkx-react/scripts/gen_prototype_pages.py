#!/usr/bin/env python3
"""Embed gkx-prototype/*.html into React JSX pages.

These pages are a temporary bridge: they render the prototype 1:1 via
`dangerouslySetInnerHTML` so we can wire routes and validate visuals quickly.
Then we can iteratively replace each page with hand-written JSX while keeping
route + layout stable.
"""

from __future__ import annotations

import json
import re
from pathlib import Path


def file_to_module_base(file: str) -> str:
    return re.sub(r"[^a-zA-Z0-9_]", "_", file)


def main() -> None:
    proto_dir = Path("/home/lvyi/work/minise-workspace/gkx-prototype")
    out_dir = Path("src/pages/prototype")
    out_dir.mkdir(parents=True, exist_ok=True)

    html_files = sorted([p for p in proto_dir.iterdir() if p.suffix == ".html"])

    # Skip references / alternates (not user-facing pages)
    skip = {
        "analysis-start.raw.html",
        "strategy-shell.html",
        "data-dashboard-new.html",
        "multi-source-data-new.html",
        "multi-source-data.raw2.html",
    }

    route_rows: list[list[str]] = []

    for p in html_files:
        name = p.name
        if name in skip:
            continue
        if name == "home.html":
            continue

        # Only 2 systems: strategy + research
        system = "research" if name in {
            "problem-identification.html",
            "problem-trend.html",
            "competition-report.html",
            "shenzhen-list.html",
        } else "strategy"

        src = p.read_text(encoding="utf-8", errors="ignore")
        # Escape template-literal breakers.
        src = src.replace("`", "\\`").replace("${", "\\${")

        base = file_to_module_base(name)
        out_path = out_dir / f"{base}.jsx"
        out_path.write_text(
            "// AUTO-GENERATED: prototype HTML embedded for 1:1 render\n"
            f"// Source: gkx-prototype/{name}\n\n"
            "export default function PrototypePage() {\n"
            "  return (\n"
            "    <div className=\"w-full\" dangerouslySetInnerHTML={{ __html: `"
            + src
            + "` }} />\n"
            "  )\n"
            "}\n",
            encoding="utf-8",
        )

        route_rows.append([system, name, base])

    Path("src/pages/prototype/_map.json").write_text(
        json.dumps(route_rows, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    print(f"generated {len(route_rows)} pages into {out_dir}")


if __name__ == "__main__":
    main()
