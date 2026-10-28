import { useEffect, useState } from 'react';
import { AppRoute } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CaptionCaseStudyPage } from './pages/CaptionCaseStudyPage';
import { DashboardCaseStudyPage } from './pages/DashboardCaseStudyPage';
import { ResumePage } from './pages/ResumePage';

function parseHashToRoute(hash: string): AppRoute {
  if (hash.startsWith('#/case-study/caption-controls')) {
    return AppRoute.CaptionCaseStudy;
  }
  if (hash.startsWith('#/case-study/creator-dashboard')) {
    return AppRoute.DashboardCaseStudy;
  }
  if (hash.startsWith('#/resume')) {
    return AppRoute.Resume;
  }
  return AppRoute.Home;
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() =>
    parseHashToRoute(window.location.hash)
  );

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = parseHashToRoute(window.location.hash);
      setCurrentRoute(nextRoute);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: AppRoute, sectionId?: string) => {
    let targetHash = '#/';
    if (route === AppRoute.CaptionCaseStudy) {
      targetHash = '#/case-study/caption-controls';
    } else if (route === AppRoute.DashboardCaseStudy) {
      targetHash = '#/case-study/creator-dashboard';
    } else if (route === AppRoute.Resume) {
      targetHash = '#/resume';
    } else if (sectionId) {
      targetHash = `#/#${sectionId}`;
    }

    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash);
    }

    setCurrentRoute(route);

    if (route === AppRoute.Home && sectionId) {
      requestAnimationFrame(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#141413]">
      {/* Accessible Skip-to-Content Link for Keyboard & Switch Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#141413] focus:text-white focus:text-xs focus:font-medium focus:rounded-lg"
      >
        Skip to main content
      </a>

      <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />

      <main id="main-content" className="flex-1">
        {currentRoute === AppRoute.Home && (
          <HomePage onNavigate={handleNavigate} />
        )}
        {currentRoute === AppRoute.CaptionCaseStudy && (
          <CaptionCaseStudyPage onNavigate={handleNavigate} />
        )}
        {currentRoute === AppRoute.DashboardCaseStudy && (
          <DashboardCaseStudyPage onNavigate={handleNavigate} />
        )}
        {currentRoute === AppRoute.Resume && (
          <ResumePage onNavigate={handleNavigate} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
