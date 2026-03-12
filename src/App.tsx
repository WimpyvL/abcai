import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { StartHere } from './pages/StartHere';
import { Business } from './pages/Business';
import { Tools } from './pages/Tools';
import { PromptLibrary } from './pages/PromptLibrary';
import { Training } from './pages/Training';
import { RolePaths } from './pages/RolePaths';
import { ReadinessTest } from './pages/ReadinessTest';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start" element={<StartHere />} />
            <Route path="/business" element={<Business />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/prompts" element={<PromptLibrary />} />
            <Route path="/training" element={<Training />} />
            <Route path="/roles" element={<RolePaths />} />
            <Route path="/readiness-test" element={<ReadinessTest />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

