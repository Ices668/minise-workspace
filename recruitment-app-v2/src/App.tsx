import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import StitchFrame from './StitchFrame'
import './index.css'

const pages = [
  { path: '/',          src: '/pages/login.html' },
  { path: '/home',      src: '/pages/home.html' },
  { path: '/job-detail',src: '/pages/job_detail.html' },
  { path: '/company',   src: '/pages/company.html' },
  { path: '/resume',    src: '/pages/resume.html' },
  { path: '/profile',   src: '/pages/profile.html' },
]

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {pages.map(({ path, src }) => (
          <Route key={path} path={path} element={<StitchFrame src={src} />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
