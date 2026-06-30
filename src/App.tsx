import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TransitionProvider } from '@/context/TransitionContext';
import Transition from '@/components/layout/Transition';
import Home from '@/pages/Home';
import ProjectsPage from '@/pages/ProjectsPage';
import NotFound from '@/pages/NotFound';

function AppRoutes() {
  return (
    <TransitionProvider>
      <Transition />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TransitionProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
