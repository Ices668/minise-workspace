import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import Layout from './layouts/Layout.jsx'
import ResearchLayout from './layouts/ResearchLayout.jsx'

import Blank from './pages/Blank.jsx'
import Home from './pages/Home.jsx'

function Root() {
  return <Outlet />
}

// Keep only 2 top-level systems (strategy/research). Preserve original html filenames in paths.
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
        children: [
          { path: 'entity-list.html', element: <Blank /> },
          { path: 'frontier-tech.html', element: <Blank /> },
          { path: 'media-focus.html', element: <Blank /> },

          { path: 'tech-system.html', element: <Blank /> },
          { path: 'paper-dashboard.html', element: <Blank /> },
          { path: 'patent.html', element: <Blank /> },
          { path: 'project-stats.html', element: <Blank /> },
          { path: 'social-network-import.html', element: <Blank /> },
          { path: 'social-network-visualize.html', element: <Blank /> },
          { path: 'social-network-metrics.html', element: <Blank /> },

          { path: 'clustering-task.html', element: <Blank /> },
          { path: 'clustering-results.html', element: <Blank /> },
          { path: 'common-network-task.html', element: <Blank /> },
          { path: 'common-network.html', element: <Blank /> },
          { path: 'tech-trend.html', element: <Blank /> },
          { path: 'tech-alert.html', element: <Blank /> },

          { path: 'delphi.html', element: <Blank /> },
          { path: 'tech-roadmap.html', element: <Blank /> },

          { path: 'report-generation.html', element: <Blank /> },
          { path: 'insight-publish.html', element: <Blank /> },
          { path: 'hot-analysis.html', element: <Blank /> },
          { path: 'report-gen-ai.html', element: <Blank /> },

          { path: 'strategy-cases.html', element: <Blank /> },

          { path: 'analysis-start.html', element: <Blank /> },
          { path: 'case-share.html', element: <Blank /> },
          { path: 'multi-source-data.html', element: <Blank /> },
          { path: 'data-dashboard.html', element: <Blank /> },
          { path: 'project-task.html', element: <Blank /> },
        ],
      },

      {
        path: 'research',
        element: <ResearchLayout />,
        children: [
          { path: 'problem-identification.html', element: <Blank /> },
          { path: 'problem-trend.html', element: <Blank /> },
          { path: 'competition-report.html', element: <Blank /> },
          { path: 'shenzhen-list.html', element: <Blank /> },
        ],
      },

      // Fallback
      { path: '*', element: <Navigate to="/home" replace /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
