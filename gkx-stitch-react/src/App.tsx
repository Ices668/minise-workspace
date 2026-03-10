import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StrategyLayout from './layouts/StrategyLayout'
import ResearchLayout from './layouts/ResearchLayout'

// 战略咨询页面
import StrategyEntityListPage from './pages/strategy/StrategyEntityListPage'
import StrategyTechSystemPage from './pages/strategy/StrategyTechSystemPage'
import StrategyConsultingReportPage from './pages/strategy/StrategyConsultingReportPage'
import StrategyReportGenPage from './pages/strategy/StrategyReportGenPage'
import StrategyCasesPage from './pages/strategy/StrategyCasesPage'
import StrategyInsightPublishPage from './pages/strategy/StrategyInsightPublishPage'

// 基础研究页面
import ResearchPaperDashboardPage from './pages/research/ResearchPaperDashboardPage'
import ResearchPaperTaskPage from './pages/research/ResearchPaperTaskPage'
import ResearchPatentPage from './pages/research/ResearchPatentPage'
import ResearchDataDashboardPage from './pages/research/ResearchDataDashboardPage'
import ResearchTechTrendPage from './pages/research/ResearchTechTrendPage'
import ResearchHotAnalysisPage from './pages/research/ResearchHotAnalysisPage'
import ResearchTechAlertPage from './pages/research/ResearchTechAlertPage'
import ResearchMediaFocusPage from './pages/research/ResearchMediaFocusPage'
import ResearchSocialNetworkPage from './pages/research/ResearchSocialNetworkPage'
import ResearchSocialNetworkVisualizePage from './pages/research/ResearchSocialNetworkVisualizePage'
import ResearchSocialNetworkMetricsPage from './pages/research/ResearchSocialNetworkMetricsPage'
import ResearchSocialNetworkImportPage from './pages/research/ResearchSocialNetworkImportPage'
import ResearchClusteringTaskPage from './pages/research/ResearchClusteringTaskPage'
import ResearchClusteringResultsPage from './pages/research/ResearchClusteringResultsPage'
import ResearchCommonNetworkPage from './pages/research/ResearchCommonNetworkPage'
import ResearchCommonNetworkTaskPage from './pages/research/ResearchCommonNetworkTaskPage'
import ResearchProjectStatsPage from './pages/research/ResearchProjectStatsPage'
import ResearchProjectTaskPage from './pages/research/ResearchProjectTaskPage'
import ResearchTechRoadmapPage from './pages/research/ResearchTechRoadmapPage'
import ResearchProblemIdentificationPage from './pages/research/ResearchProblemIdentificationPage'
import ResearchProblemTrendPage from './pages/research/ResearchProblemTrendPage'
import ResearchDelphiPage from './pages/research/ResearchDelphiPage'
import ResearchMultiSourceDataPage from './pages/research/ResearchMultiSourceDataPage'
import ResearchShenzhenListPage from './pages/research/ResearchShenzhenListPage'
import ResearchFrontierTechPage from './pages/research/ResearchFrontierTechPage'
import ResearchCompetitionReportPage from './pages/research/ResearchCompetitionReportPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 系统选择首页 */}
        <Route path="/" element={<HomePage />} />

        {/* 战略咨询系统 */}
        <Route path="/strategy" element={<StrategyLayout />}>
          <Route index element={<Navigate to="/strategy/entity-list" replace />} />
          <Route path="entity-list" element={<StrategyEntityListPage />} />
          <Route path="tech-system" element={<StrategyTechSystemPage />} />
          <Route path="consulting-report" element={<StrategyConsultingReportPage />} />
          <Route path="report-generation" element={<StrategyReportGenPage />} />
          <Route path="cases" element={<StrategyCasesPage />} />
          <Route path="insight-publish" element={<StrategyInsightPublishPage />} />
        </Route>

        {/* 基础研究系统 */}
        <Route path="/research" element={<ResearchLayout />}>
          <Route index element={<Navigate to="/research/paper-dashboard" replace />} />
          <Route path="paper-dashboard" element={<ResearchPaperDashboardPage />} />
          <Route path="paper-task" element={<ResearchPaperTaskPage />} />
          <Route path="patent" element={<ResearchPatentPage />} />
          <Route path="data-dashboard" element={<ResearchDataDashboardPage />} />
          <Route path="tech-trend" element={<ResearchTechTrendPage />} />
          <Route path="hot-analysis" element={<ResearchHotAnalysisPage />} />
          <Route path="tech-alert" element={<ResearchTechAlertPage />} />
          <Route path="media-focus" element={<ResearchMediaFocusPage />} />
          <Route path="social-network" element={<ResearchSocialNetworkPage />} />
          <Route path="social-network-visualize" element={<ResearchSocialNetworkVisualizePage />} />
          <Route path="social-network-metrics" element={<ResearchSocialNetworkMetricsPage />} />
          <Route path="social-network-import" element={<ResearchSocialNetworkImportPage />} />
          <Route path="clustering-task" element={<ResearchClusteringTaskPage />} />
          <Route path="clustering-results" element={<ResearchClusteringResultsPage />} />
          <Route path="common-network" element={<ResearchCommonNetworkPage />} />
          <Route path="common-network-task" element={<ResearchCommonNetworkTaskPage />} />
          <Route path="project-stats" element={<ResearchProjectStatsPage />} />
          <Route path="project-task" element={<ResearchProjectTaskPage />} />
          <Route path="tech-roadmap" element={<ResearchTechRoadmapPage />} />
          <Route path="problem-identification" element={<ResearchProblemIdentificationPage />} />
          <Route path="problem-trend" element={<ResearchProblemTrendPage />} />
          <Route path="delphi" element={<ResearchDelphiPage />} />
          <Route path="multi-source-data" element={<ResearchMultiSourceDataPage />} />
          <Route path="shenzhen-list" element={<ResearchShenzhenListPage />} />
          <Route path="frontier-tech" element={<ResearchFrontierTechPage />} />
          <Route path="competition-report" element={<ResearchCompetitionReportPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
