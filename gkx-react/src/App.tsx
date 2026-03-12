import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routesMap";
import HomePage from "./pages/HomePage";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import EntityListPage from "./pages/EntityListPage";
import FrontierTechPage from "./pages/FrontierTechPage";
import MediaFocusPage from "./pages/MediaFocusPage";
import TechSystemPage from "./pages/TechSystemPage";
import PaperDashboardPage from "./pages/PaperDashboardPage";
import PatentPage from "./pages/PatentPage";
import ProjectStatsPage from "./pages/ProjectStatsPage";
import SocialNetworkImportPage from "./pages/SocialNetworkImportPage";
import SocialNetworkVisualizePage from "./pages/SocialNetworkVisualizePage";
import SocialNetworkMetricsPage from "./pages/SocialNetworkMetricsPage";
import ClusteringTaskPage from "./pages/ClusteringTaskPage";
import ClusteringResultsPage from "./pages/ClusteringResultsPage";
import CommonNetworkTaskPage from "./pages/CommonNetworkTaskPage";
import CommonNetworkPage from "./pages/CommonNetworkPage";
import TechTrendPage from "./pages/TechTrendPage";
import TechAlertPage from "./pages/TechAlertPage";
import DelphiPage from "./pages/DelphiPage";
import TechRoadmapPage from "./pages/TechRoadmapPage";
import ReportGenerationPage from "./pages/ReportGenerationPage";
import InsightPublishPage from "./pages/InsightPublishPage";
import HotAnalysisPage from "./pages/HotAnalysisPage";
import ReportGenAiPage from "./pages/ReportGenAiPage";
import StrategyCasesPage from "./pages/StrategyCasesPage";
import AnalysisStartPage from "./pages/AnalysisStartPage";
import CaseSharePage from "./pages/CaseSharePage";
import MultiSourceDataPage from "./pages/MultiSourceDataPage";
import DataDashboardPage from "./pages/DataDashboardPage";
import ProjectTaskPage from "./pages/ProjectTaskPage";
import ProblemIdentificationPage from "./pages/ProblemIdentificationPage";
import ProblemTrendPage from "./pages/ProblemTrendPage";
import CompetitionReportPage from "./pages/CompetitionReportPage";
import ShenzhenListPage from "./pages/ShenzhenListPage";

const ROUTE_COMPONENT_MAP: Readonly<Record<string, React.ReactNode>> = {
  "/home": <HomePage />,
  "/strategy/entity-list.html": <EntityListPage />,
  "/strategy/frontier-tech.html": <FrontierTechPage />,
  "/strategy/media-focus.html": <MediaFocusPage />,
  "/strategy/tech-system.html": <TechSystemPage />,
  "/strategy/paper-dashboard.html": <PaperDashboardPage />,
  "/strategy/patent.html": <PatentPage />,
  "/strategy/project-stats.html": <ProjectStatsPage />,
  "/strategy/social-network-import.html": <SocialNetworkImportPage />,
  "/strategy/social-network-visualize.html": <SocialNetworkVisualizePage />,
  "/strategy/social-network-metrics.html": <SocialNetworkMetricsPage />,
  "/strategy/clustering-task.html": <ClusteringTaskPage />,
  "/strategy/clustering-results.html": <ClusteringResultsPage />,
  "/strategy/common-network-task.html": <CommonNetworkTaskPage />,
  "/strategy/common-network.html": <CommonNetworkPage />,
  "/strategy/tech-trend.html": <TechTrendPage />,
  "/strategy/tech-alert.html": <TechAlertPage />,
  "/strategy/delphi.html": <DelphiPage />,
  "/strategy/tech-roadmap.html": <TechRoadmapPage />,
  "/strategy/report-generation.html": <ReportGenerationPage />,
  "/strategy/insight-publish.html": <InsightPublishPage />,
  "/strategy/hot-analysis.html": <HotAnalysisPage />,
  "/strategy/report-gen-ai.html": <ReportGenAiPage />,
  "/strategy/strategy-cases.html": <StrategyCasesPage />,
  "/strategy/analysis-start.html": <AnalysisStartPage />,
  "/strategy/case-share.html": <CaseSharePage />,
  "/strategy/multi-source-data.html": <MultiSourceDataPage />,
  "/strategy/data-dashboard.html": <DataDashboardPage />,
  "/strategy/project-task.html": <ProjectTaskPage />,
  "/research/problem-identification.html": <ProblemIdentificationPage />,
  "/research/problem-trend.html": <ProblemTrendPage />,
  "/research/competition-report.html": <CompetitionReportPage />,
  "/research/shenzhen-list.html": <ShenzhenListPage />,
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      {ROUTES.map((r) => (
        <Route key={r.path} path={r.path} element={(ROUTE_COMPONENT_MAP[r.path] as React.ReactElement) ?? <PlaceholderPage />} />
      ))}

      <Route path="*" element={<PlaceholderPage />} />
    </Routes>
  );
}
