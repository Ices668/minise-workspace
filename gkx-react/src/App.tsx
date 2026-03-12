import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routesMap";
import { PlaceholderPage } from "./pages/PlaceholderPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      {ROUTES.map((r) => (
        <Route key={r.path} path={r.path} element={<PlaceholderPage />} />
      ))}

      <Route path="*" element={<PlaceholderPage />} />
    </Routes>
  );
}
