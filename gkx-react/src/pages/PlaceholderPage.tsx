import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../routesMap";

export function PlaceholderPage() {
  const location = useLocation();

  const routeMeta = useMemo(() => {
    return ROUTES.find((r) => r.path === location.pathname);
  }, [location.pathname]);

  return (
    <div style={{ padding: 24, fontFamily: "ui-sans-serif, system-ui" }}>
      <h1 style={{ margin: 0, fontSize: 22 }}>GKX React (WIP)</h1>
      <p style={{ marginTop: 8, color: "#333" }}>
        Route: <code>{location.pathname}</code>
      </p>
      {routeMeta ? (
        <div style={{ marginTop: 12 }}>
          <div>
            Title: <strong>{routeMeta.title}</strong>
          </div>
          <div>
            Source HTML: <code>{routeMeta.sourceHtml}</code>
          </div>
          <div>
            System: <code>{routeMeta.system}</code>
          </div>
        </div>
      ) : (
        <p style={{ marginTop: 12, color: "#ef4444" }}>Route not found in routesMap.ts</p>
      )}

      <hr style={{ margin: "24px 0", border: 0, borderTop: "1px solid #e5e8ed" }} />

      <p style={{ margin: 0, color: "#64748b" }}>
        Next: migrate prototype HTML to JSX 1:1 per page.
      </p>
    </div>
  );
}
