import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import Layout from './layouts/Layout.jsx'
import ResearchLayout from './layouts/ResearchLayout.jsx'

import Home from './pages/Home.jsx'
import Blank from './pages/Blank.jsx'

// Auto-generated static imports for prototype pages (dangerouslySetInnerHTML).
import P_analysis_start_html from './pages/prototype/analysis_start_html.jsx'
import P_case_share_html from './pages/prototype/case_share_html.jsx'
import P_clustering_results_html from './pages/prototype/clustering_results_html.jsx'
import P_clustering_task_html from './pages/prototype/clustering_task_html.jsx'
import P_common_network_html from './pages/prototype/common_network_html.jsx'
import P_common_network_task_html from './pages/prototype/common_network_task_html.jsx'
import P_competition_report_html from './pages/prototype/competition_report_html.jsx'
import P_data_dashboard_html from './pages/prototype/data_dashboard_html.jsx'
import P_delphi_html from './pages/prototype/delphi_html.jsx'
import P_entity_list_html from './pages/prototype/entity_list_html.jsx'
import P_frontier_tech_html from './pages/prototype/frontier_tech_html.jsx'
import P_hot_analysis_html from './pages/prototype/hot_analysis_html.jsx'
import P_insight_publish_html from './pages/prototype/insight_publish_html.jsx'
import P_media_focus_html from './pages/prototype/media_focus_html.jsx'
import P_multi_source_data_html from './pages/prototype/multi_source_data_html.jsx'
import P_paper_dashboard_html from './pages/prototype/paper_dashboard_html.jsx'
import P_paper_task_html from './pages/prototype/paper_task_html.jsx'
import P_patent_html from './pages/prototype/patent_html.jsx'
import P_problem_identification_html from './pages/prototype/problem_identification_html.jsx'
import P_problem_trend_html from './pages/prototype/problem_trend_html.jsx'
import P_project_stats_html from './pages/prototype/project_stats_html.jsx'
import P_project_task_html from './pages/prototype/project_task_html.jsx'
import P_report_gen_ai_html from './pages/prototype/report_gen_ai_html.jsx'
import P_report_generation_html from './pages/prototype/report_generation_html.jsx'
import P_shenzhen_list_html from './pages/prototype/shenzhen_list_html.jsx'
import P_social_network_import_html from './pages/prototype/social_network_import_html.jsx'
import P_social_network_metrics_html from './pages/prototype/social_network_metrics_html.jsx'
import P_social_network_visualize_html from './pages/prototype/social_network_visualize_html.jsx'
import P_strategy_cases_html from './pages/prototype/strategy_cases_html.jsx'
import P_tech_alert_html from './pages/prototype/tech_alert_html.jsx'
import P_tech_roadmap_html from './pages/prototype/tech_roadmap_html.jsx'
import P_tech_system_html from './pages/prototype/tech_system_html.jsx'
import P_tech_trend_html from './pages/prototype/tech_trend_html.jsx'

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
        children: [
          { path: 'analysis-start.html', element: <P_analysis_start_html /> },
          { path: 'case-share.html', element: <P_case_share_html /> },
          { path: 'clustering-results.html', element: <P_clustering_results_html /> },
          { path: 'clustering-task.html', element: <P_clustering_task_html /> },
          { path: 'common-network-task.html', element: <P_common_network_task_html /> },
          { path: 'common-network.html', element: <P_common_network_html /> },
          { path: 'data-dashboard.html', element: <P_data_dashboard_html /> },
          { path: 'delphi.html', element: <P_delphi_html /> },
          { path: 'entity-list.html', element: <P_entity_list_html /> },
          { path: 'frontier-tech.html', element: <P_frontier_tech_html /> },
          { path: 'hot-analysis.html', element: <P_hot_analysis_html /> },
          { path: 'insight-publish.html', element: <P_insight_publish_html /> },
          { path: 'media-focus.html', element: <P_media_focus_html /> },
          { path: 'multi-source-data.html', element: <P_multi_source_data_html /> },
          { path: 'paper-dashboard.html', element: <P_paper_dashboard_html /> },
          { path: 'paper-task.html', element: <P_paper_task_html /> },
          { path: 'patent.html', element: <P_patent_html /> },
          { path: 'project-stats.html', element: <P_project_stats_html /> },
          { path: 'project-task.html', element: <P_project_task_html /> },
          { path: 'report-gen-ai.html', element: <P_report_gen_ai_html /> },
          { path: 'report-generation.html', element: <P_report_generation_html /> },
          { path: 'social-network-import.html', element: <P_social_network_import_html /> },
          { path: 'social-network-metrics.html', element: <P_social_network_metrics_html /> },
          { path: 'social-network-visualize.html', element: <P_social_network_visualize_html /> },
          { path: 'strategy-cases.html', element: <P_strategy_cases_html /> },
          { path: 'tech-alert.html', element: <P_tech_alert_html /> },
          { path: 'tech-roadmap.html', element: <P_tech_roadmap_html /> },
          { path: 'tech-system.html', element: <P_tech_system_html /> },
          { path: 'tech-trend.html', element: <P_tech_trend_html /> },
          { path: ':page', element: <Blank /> },
        ],
      },

      {
        path: 'research',
        element: <ResearchLayout />,
        children: [
          { path: 'competition-report.html', element: <P_competition_report_html /> },
          { path: 'problem-identification.html', element: <P_problem_identification_html /> },
          { path: 'problem-trend.html', element: <P_problem_trend_html /> },
          { path: 'shenzhen-list.html', element: <P_shenzhen_list_html /> },
          { path: ':page', element: <Blank /> },
        ],
      },

      { path: '*', element: <Navigate to="/home" replace /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
