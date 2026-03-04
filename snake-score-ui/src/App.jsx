import { Navigate, Route, Routes } from "react-router-dom";
import GameOverPage from "./pages/GameOverPage";
import GamePage from "./pages/GamePage";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuPage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/gameover" element={<GameOverPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
