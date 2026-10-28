import React from 'react';
import { ArrowLeft, Check, X } from 'lucide-react';
import { AppRoute } from '../types/portfolio';
import { CreatorDashboardMockup } from '../components/CreatorDashboardMockup';

interface DashboardCaseStudyPageProps {
  onNavigate: (route: AppRoute, sectionId?: string) => void;
}

export const DashboardCaseStudyPage: React.FC<DashboardCaseStudyPageProps> = ({
  onNavigate,
}) => {
  return (
    <article className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14 space-y-16">
      {/* Top Breadcrumb */}
      <div>
        <button
          type="button"
          onClick={() => onNavigate(AppRoute.Home, 'work')}
          className="inline-flex items-center gap-2 text-xs font-medium text-[#52514E] hover:text-[#141413] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Portfolio Overview</span>
        </button>
      </div>

      {/* Header */}
      <header className="space-y-5 pb-10 border-b border-[#E6E4DF]">
        <div className="p-4 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl text-xs text-[#52514E]">
          <span className="font-semibold text-[#141413]">Supporting Study Scope: </span>
          Conceptual redesign exploring 10 high-fidelity screens, 8 reusable UI components, and 2 compared layout directions using synthetic creator data. No post-launch metric lifts are claimed.
        </div>

        <div className="space-y-3 max-w-3xl">
          <p className="text-xs font-medium text-[#73716C]">
            02. Supporting Case Study · Information Architecture &amp; Data Visualization
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141413]">
            Helping Creators Understand Their Analytics
          </h1>
          <p className="text-base text-[#52514E] leading-relaxed">
            Redesigned around three key creator tasks—reviewing video performance, comparing engagement, and identifying content trends—across loading, empty, error, and populated states.
          </p>
        </div>

        <dl className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
          <div>
            <dt className="font-semibold text-[#141413]">Deliverables</dt>
            <dd className="mt-1 text-[#52514E]">10 high-fi screens · 8 UI components</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#141413]">Intended Users</dt>
            <dd className="mt-1 text-[#52514E]">Small-to-mid creators (5k–100k subs)</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#141413]">Tools</dt>
            <dd className="mt-1 text-[#52514E]">Figma, Responsive UI &amp; State Spec</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#141413]">Exploration</dt>
            <dd className="mt-1 text-[#52514E]">2 layout directions compared</dd>
          </div>
        </dl>
      </header>

      {/* 1. Problem & Intended Users */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="text-xl font-bold text-[#141413]">
            Problem Statement &amp; Intended Users
          </h2>
        </div>
        <div className="md:col-span-8 space-y-3 text-sm text-[#52514E] leading-relaxed">
          <p>
            Part-time educators and technical creators rarely have dedicated channel managers. When checking an upload 48 hours after publishing, raw numbers like <span className="font-mono text-[#141413]">18,420 views</span> or <span className="font-mono text-[#141413]">59% watched</span> mean very little without context, while sudden red downward arrows on quiet weeks create unnecessary anxiety.
          </p>
          <p>
            This concept focuses on answering three practical questions in order: <strong className="text-[#141413]">1) Is this upload performing within my normal channel baseline?</strong> <strong className="text-[#141413]">2) Which chapter timestamp lost viewers?</strong> <strong className="text-[#141413]">3) How does it compare against my recent uploads?</strong>
          </p>
        </div>
      </section>

      {/* 2. Information Architecture & Low-Fi Wireframe */}
      <section className="border-t border-[#E6E4DF] pt-12 space-y-6">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#141413]">
            Information Architecture &amp; Wireframe Progression
          </h2>
          <p className="text-sm text-[#52514E]">
            Reorganizing flat metric tabs into a three-tier top-down reading sequence that degrades cleanly from a 1200px desktop workspace down to a 375px mobile stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-2">
            <p className="font-mono text-[#73716C]">Tier 01 · Context First</p>
            <h3 className="text-sm font-bold text-[#141413]">Summary + 28d Median Range</h3>
            <p className="text-[#52514E] leading-relaxed">
              Pairs every headline KPI with the creator’s own 28-day typical range so normalupload variance is never misread as failure.
            </p>
          </div>
          <div className="p-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-2">
            <p className="font-mono text-[#73716C]">Tier 02 · Actionable Diagnostic</p>
            <h3 className="text-sm font-bold text-[#141413]">Chapter-Aligned Retention</h3>
            <p className="text-[#52514E] leading-relaxed">
              Maps retention percentages directly to named video chapters rather than an unlabeled time curve, making drop-offs immediately interpretable.
            </p>
          </div>
          <div className="p-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-2">
            <p className="font-mono text-[#73716C]">Tier 03 · Cross-Video Comparison</p>
            <h3 className="text-sm font-bold text-[#141413]">Tabular Recent Uploads</h3>
            <p className="text-[#52514E] leading-relaxed">
              Uses right-aligned <span className="font-mono">tabular-nums</span> columns on desktop and stacked summary cards on mobile viewports.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Interactive Screens, States & Responsive Switcher */}
      <section className="border-t border-[#E6E4DF] pt-12 space-y-6">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#141413]">
            Dashboard Screens, Edge States &amp; Responsive Behavior
          </h2>
          <p className="text-sm text-[#52514E]">
            Toggle between Populated, Loading, Empty (new creator), and Sync Error states, as well as Desktop vs. Mobile layouts and the accessible data-table view.
          </p>
        </div>

        <CreatorDashboardMockup />
      </section>

      {/* 4. Reusable Components, Alternative Direction & Accessibility */}
      <section className="border-t border-[#E6E4DF] pt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        <div className="p-6 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#141413]">
              Alternative Rejected: Single “Creator Score” Gauge
            </h3>
            <span className="inline-flex items-center gap-1 text-[#52514E]">
              <X className="w-3.5 h-3.5 text-[#C8102E]" aria-hidden="true" />
              <span>Rejected</span>
            </span>
          </div>
          <p className="text-[#52514E] leading-relaxed">
            An early wireframe condensed views, watch time, and click-through rate into a single composite <span className="font-mono text-[#141413]">0–100 Health Score</span>. I rejected this direction because opaque composite scores hide <em>why</em> a video changed—for example, high search discovery often lowers returning-viewer share while still growing the channel.
          </p>
          <p className="pt-2 border-t border-[#E6E4DF] text-[#141413] flex items-center gap-1.5 font-medium">
            <Check className="w-3.5 h-3.5 text-[#C8102E] shrink-0" aria-hidden="true" />
            <span>Selected transparent 28-day typical ranges instead.</span>
          </p>
        </div>

        <div className="p-6 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-3">
          <h3 className="text-sm font-bold text-[#141413]">
            Reusable Components &amp; Accessibility Decisions
          </h3>
          <ul className="space-y-2 text-[#52514E] leading-relaxed list-disc pl-4">
            <li>
              <strong className="text-[#141413]">No hue-only trends:</strong> Replaces red/green-only delta numbers with explicit directional icons and plain-English baseline labels (<span className="font-mono text-[#141413]">↑ Above typical</span>).
            </li>
            <li>
              <strong className="text-[#141413]">Accessible chart alternative:</strong> One-click semantic <span className="font-mono text-[#141413]">&lt;table&gt;</span> toggle exposes chapter timestamps and retention figures cleanly to screen readers.
            </li>
            <li>
              <strong className="text-[#141413]">Honest limitations:</strong> Built with synthetic data to practice layout hierarchy and edge-state completeness; real creator interviews would be needed to validate which 3 metrics deserve top-row priority across different content genres (Shorts vs. long-form tutorials).
            </li>
          </ul>
        </div>
      </section>

      {/* Back to Featured Case Study */}
      <div className="pt-8 border-t border-[#E6E4DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-xs text-[#73716C]">Primary Portfolio Centerpiece</p>
          <p className="text-base font-bold text-[#141413]">
            Making Caption Controls Easier to Discover
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate(AppRoute.CaptionCaseStudy)}
          className="px-5 py-2.5 text-sm font-medium text-white bg-[#C8102E] rounded-lg hover:bg-[#A50D26] transition-colors cursor-pointer"
        >
          View Featured Caption Study
        </button>
      </div>
    </article>
  );
};
