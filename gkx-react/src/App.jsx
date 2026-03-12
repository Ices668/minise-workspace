import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import Layout from './layouts/Layout.jsx'
import ResearchLayout from './layouts/ResearchLayout.jsx'
import Blank from './pages/Blank.jsx'
import Home from './pages/Home.jsx'

function Root() {
  return <Outlet />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: 'home', element: <Home /> },

      {
        path: 'strategy',
        element: <Layout />,
        children: [{ path: ':page', element: <Blank /> }],
      },

      {
        path: 'research',
        element: <ResearchLayout />,
        children: [{ path: ':page', element: <Blank /> }],
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
