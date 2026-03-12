import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { GkxIndex } from './app/GkxIndex.jsx'
import HomePage from './pages/gkx/HomePage.jsx'
import EntityListPage from './pages/gkx/EntityListPage.jsx'
import ProblemIdentificationPage from './pages/gkx/ProblemIdentificationPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GkxIndex />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/strategy/entity-list" element={<EntityListPage />} />
        <Route path="/strategy/problem-identification" element={<ProblemIdentificationPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
