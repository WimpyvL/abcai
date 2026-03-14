import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { JourneyProfileProvider } from './components/JourneyProfile';
import { Footer, Navbar } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const StartHere = lazy(() => import('./pages/StartHere').then((module) => ({ default: module.StartHere })));
const Courses = lazy(() => import('./pages/Courses').then((module) => ({ default: module.Courses })));
const CourseDetail = lazy(() => import('./pages/CourseDetail').then((module) => ({ default: module.CourseDetail })));
const Business = lazy(() => import('./pages/Business').then((module) => ({ default: module.Business })));
const Tools = lazy(() => import('./pages/Tools').then((module) => ({ default: module.Tools })));
const PromptLibrary = lazy(() => import('./pages/PromptLibrary').then((module) => ({ default: module.PromptLibrary })));
const RolePaths = lazy(() => import('./pages/RolePaths').then((module) => ({ default: module.RolePaths })));
const ReadinessTest = lazy(() => import('./pages/ReadinessTest').then((module) => ({ default: module.ReadinessTest })));
const Training = lazy(() => import('./pages/Training').then((module) => ({ default: module.Training })));

export default function App() {
  return (
    <Router>
      <JourneyProfileProvider>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Suspense
              fallback={
                <div className="px-4 py-32 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-7xl rounded-[2rem] border border-[color:var(--line)] bg-white/75 p-8 text-sm text-[color:var(--muted)]">
                    Loading ABCAI...
                  </div>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<StartHere />} />
                <Route path="/start" element={<Navigate to="/learn" replace />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:slug" element={<CourseDetail />} />
                <Route path="/use" element={<Business />} />
                <Route path="/business" element={<Navigate to="/use" replace />} />
                <Route path="/choose" element={<Tools />} />
                <Route path="/tools" element={<Navigate to="/choose" replace />} />
                <Route path="/build" element={<RolePaths />} />
                <Route path="/roles" element={<Navigate to="/build" replace />} />
                <Route path="/prompts" element={<PromptLibrary />} />
                <Route path="/training" element={<Training />} />
                <Route path="/readiness-test" element={<ReadinessTest />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </JourneyProfileProvider>
    </Router>
  );
}
