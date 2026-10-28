import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AppRoute } from '../types/portfolio';

interface NavbarProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute, sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (route: AppRoute, sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(route, sectionId);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#E6E4DF] no-print">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-5 sm:px-8 h-14">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick(AppRoute.Home);
          }}
          className="font-display text-base font-bold tracking-tight text-[#141413] whitespace-nowrap shrink-0 hover:text-[#C8102E] transition-colors duration-150"
        >
          Bhumika Shukla
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7 text-sm font-medium text-[#52514E]">
          <a
            href="#/#work"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(AppRoute.Home, 'work');
            }}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 ${
              currentRoute === AppRoute.CaptionCaseStudy || currentRoute === AppRoute.DashboardCaseStudy
                ? 'border-[#C8102E] text-[#141413]'
                : 'border-transparent hover:text-[#141413] hover:border-[#141413]/30'
            }`}
          >
            Work
          </a>
          <a
            href="#/#about"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(AppRoute.Home, 'about');
            }}
            className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:text-[#141413] hover:border-[#141413]/30 transition-colors duration-150"
          >
            About
          </a>
          <a
            href="#/resume"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(AppRoute.Resume);
            }}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 ${
              currentRoute === AppRoute.Resume
                ? 'border-[#C8102E] text-[#141413]'
                : 'border-transparent hover:text-[#141413] hover:border-[#141413]/30'
            }`}
          >
            Resume
          </a>
          <a
            href="#/#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(AppRoute.Home, 'contact');
            }}
            className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:text-[#141413] hover:border-[#141413]/30 transition-colors duration-150"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action (desktop) + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick(AppRoute.Resume)}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-[#141413] rounded-lg hover:bg-[#C8102E] transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[36px] cursor-pointer"
          >
            View Resume
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-primary-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#141413] hover:bg-[#F3F2EE] transition-colors duration-150 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-primary-menu"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#E6E4DF] bg-[#FAF9F6] px-5 py-4 space-y-1"
        >
          <button
            type="button"
            onClick={() => handleLinkClick(AppRoute.Home, 'work')}
            className="w-full text-left px-3 py-3 text-base font-medium text-[#141413] rounded-lg hover:bg-[#F3F2EE] transition-colors"
          >
            Work
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick(AppRoute.Home, 'about')}
            className="w-full text-left px-3 py-3 text-base font-medium text-[#141413] rounded-lg hover:bg-[#F3F2EE] transition-colors"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick(AppRoute.Resume)}
            className="w-full text-left px-3 py-3 text-base font-medium text-[#141413] rounded-lg hover:bg-[#F3F2EE] transition-colors"
          >
            Resume
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick(AppRoute.Home, 'contact')}
            className="w-full text-left px-3 py-3 text-base font-medium text-[#141413] rounded-lg hover:bg-[#F3F2EE] transition-colors"
          >
            Contact
          </button>
        </nav>
      )}
    </header>
  );
};
