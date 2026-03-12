import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import Layout from './layouts/Layout.jsx'
import Blank from './pages/Blank.jsx'

function Root() {
  return <Outlet />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Navigate to="/strategy/entity-list.html" replace /> },
      {
        path: 'strategy',
        element: <Layout />,
        children: [
          { path: ':page', element: <Blank /> },
        ],
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
