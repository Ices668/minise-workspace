import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'

import { GkxHtml } from './app/GkxHtml'
import { GkxIndex } from './app/GkxIndex'
import { GKX_PAGES, type GkxPage } from './app/routes'

function GkxPageFrame() {
  const { slug } = useParams()
  const page = `${slug ?? ''}.html` as GkxPage
  if (!GKX_PAGES.includes(page)) return <Navigate to="/" replace />
  return <GkxHtml page={page} />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GkxIndex />} />
        <Route path="/gkx/:slug" element={<GkxPageFrame />} />
      </Routes>
    </BrowserRouter>
  )
}
