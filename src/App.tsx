import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TransitionProvider } from '@/context/TransitionContext';
import Transition from '@/components/layout/Transition';
import Home from '@/pages/Home';
import ProjectsPage from '@/pages/ProjectsPage';
import ExperiencePage from '@/pages/ExperiencePage';
import NotFound from '@/pages/NotFound';

function AppRoutes() {
  return (
    <TransitionProvider>
      <Transition />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TransitionProvider>
  );
}

import React, { Component, ErrorInfo, ReactNode } from 'react';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) { console.error("Session_Critical_Failure:", error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-bg-primary text-text-primary p-12 text-center">
          <h2 className="text-2xl font-bold mb-4 font-mono uppercase tracking-widest text-sky-400">System_Recovery_Active</h2>
          <p className="text-text-secondary mb-8 max-w-md font-light">A technical glitch was detected. The environment has been stabilized.</p>
          <button onClick={() => window.location.reload()} className="px-8 py-3 bg-white text-black rounded-full font-bold uppercase tracking-widest text-[10px]">Reboot_Interface</button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
