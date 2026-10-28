import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Download, FileText, Printer } from 'lucide-react';
import { AppRoute } from '../types/portfolio';
import {
  ACHIEVEMENTS_LIST,
  PROFILE_INFO,
  RESUME_PDF_PATH,
  SKILL_GROUPS,
} from '../data/portfolioData';

interface ResumePageProps {
  onNavigate: (route: AppRoute, sectionId?: string) => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<'pdf' | 'readable'>('pdf');

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14 space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
        <button
          type="button"
          onClick={() => onNavigate(AppRoute.Home)}
          className="inline-flex items-center gap-2 text-xs font-medium text-[#52514E] hover:text-[#141413] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Segmented View Switcher: Embedded PDF vs Accessible HTML */}
          <div
            role="tablist"
            aria-label="Resume format view"
            className="flex items-center gap-1 p-1 bg-[#F3F2EE] border border-[#E6E4DF] rounded-lg"
          >
            <button
              role="tab"
              type="button"
              aria-selected={viewMode === 'pdf'}
              onClick={() => setViewMode('pdf')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'pdf'
                  ? 'bg-[#FFFFFF] text-[#141413] shadow-2xs'
                  : 'text-[#52514E] hover:text-[#141413]'
              }`}
            >
              Original PDF
            </button>
            <button
              role="tab"
              type="button"
              aria-selected={viewMode === 'readable'}
              onClick={() => setViewMode('readable')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'readable'
                  ? 'bg-[#FFFFFF] text-[#141413] shadow-2xs'
                  : 'text-[#52514E] hover:text-[#141413]'
              }`}
            >
              Accessible Web Text
            </button>
          </div>

          <a
            href={RESUME_PDF_PATH}
            download="Bhumika_Shukla_UX_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#C8102E] rounded-lg hover:bg-[#A50D26] transition-colors whitespace-nowrap shrink-0 min-h-[38px]"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Download Resume PDF</span>
          </a>

          {viewMode === 'readable' && (
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#141413] bg-[#FFFFFF] border border-[#E6E4DF] rounded-lg hover:border-[#141413]/40 transition-colors whitespace-nowrap shrink-0 min-h-[38px] cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Print</span>
            </button>
          )}
        </div>
      </div>

      {/* Mode 1: Actual Embedded Resume PDF */}
      {viewMode === 'pdf' ? (
        <div className="bg-[#FFFFFF] border border-[#E6E4DF] rounded-2xl overflow-hidden">
          <div className="px-5 py-3 border-b border-[#E6E4DF] bg-[#FAF9F6] flex flex-wrap items-center justify-between gap-2 text-xs text-[#52514E]">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#C8102E]" aria-hidden="true" />
              <span className="font-medium text-[#141413]">Bhumika_Shukla_UX_Resume.pdf</span>
            </div>
            <a
              href={RESUME_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[#141413] hover:text-[#C8102E] underline-offset-4 hover:underline"
            >
              <span>Open PDF in full tab</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          <iframe
            src={RESUME_PDF_PATH}
            title="Bhumika Shukla UX Design Resume PDF"
            className="w-full h-[820px] sm:h-[1040px] bg-[#F3F2EE]"
          />
        </div>
      ) : (
        /* Mode 2: Accessible Semantic HTML Mirror of the Uploaded PDF */
        <div className="print-sheet bg-[#FFFFFF] border border-[#E6E4DF] rounded-2xl p-6 sm:p-10 space-y-7">
          <header className="pb-6 border-b border-[#E6E4DF] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]">
                {PROFILE_INFO.name}
              </h1>
              <p className="text-sm font-medium text-[#52514E]">
                UX Design Intern · Product Design · Interaction Design
              </p>
              <p className="text-xs text-[#73716C]">
                {PROFILE_INFO.location} · {PROFILE_INFO.phone}
              </p>
            </div>

            <div className="text-xs text-[#52514E] space-y-1 sm:text-right">
              <div>
                <a
                  href={`mailto:${PROFILE_INFO.email}`}
                  className="hover:text-[#C8102E] underline-offset-2 hover:underline"
                >
                  {PROFILE_INFO.email}
                </a>
              </div>
              <div className="flex sm:justify-end items-center gap-3">
                <a
                  href={PROFILE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 hover:text-[#C8102E] underline-offset-2 hover:underline"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 no-print" aria-hidden="true" />
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={PROFILE_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 hover:text-[#C8102E] underline-offset-2 hover:underline"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 no-print" aria-hidden="true" />
                </a>
              </div>
            </div>
          </header>

          {/* Education */}
          <section className="space-y-1.5">
            <h2 className="text-xs font-semibold text-[#73716C]">Education</h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <p className="text-sm font-bold text-[#141413]">
                {PROFILE_INFO.institution} — {PROFILE_INFO.degree}
              </p>
              <span className="font-mono text-xs text-[#52514E] tabular-nums">
                {PROFILE_INFO.graduation} · CGPA: {PROFILE_INFO.cgpa}
              </span>
            </div>
            <p className="text-xs text-[#52514E]">
              <span className="font-semibold text-[#141413]">Relevant Coursework: </span>
              {PROFILE_INFO.coursework}
            </p>
          </section>

          {/* UX Design Projects */}
          <section className="space-y-4">
            <h2 className="text-xs font-semibold text-[#73716C]">UX Design Projects</h2>

            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <button
                  type="button"
                  onClick={() => onNavigate(AppRoute.CaptionCaseStudy)}
                  className="text-left text-sm font-bold text-[#141413] hover:text-[#C8102E] transition-colors cursor-pointer"
                >
                  Mobile Caption Controls — Independent UX Concept
                </button>
                <span className="text-xs text-[#73716C]">
                  Figma · User Research · Interaction Design · Accessibility · Prototyping
                </span>
              </div>
              <ul className="list-disc pl-4 text-xs text-[#52514E] space-y-1 leading-relaxed">
                <li>
                  Evaluated the mobile video-watching experience with 6 participants, identifying caption discoverability and playback-control navigation as key usability challenges.
                </li>
                <li>
                  Found that 4 of 6 participants struggled to locate caption settings in the first test; redesigned the control flow to make caption access more discoverable without interrupting playback.
                </li>
                <li>
                  Created 3 user flows, 8 low-fidelity wireframes, and a high-fidelity interactive prototype covering caption activation, styling, and playback states.
                </li>
                <li>
                  Ran a second usability round in which all 6 participants located the caption controls, compared with 2 of 6 in the initial round.
                </li>
                <li>
                  Annotated accessibility decisions covering text contrast, touch targets, caption readability, screen-reader labels, and interaction feedback.
                </li>
                <li>
                  Rejected a dedicated caption-settings screen in favor of a more direct player-level interaction to reduce navigation effort and preserve viewing continuity.
                </li>
              </ul>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <p className="text-sm font-bold text-[#141413]">
                  Design-to-Development Handoff
                </p>
                <span className="text-xs text-[#73716C]">
                  Figma · HTML · CSS · JavaScript · GitHub
                </span>
              </div>
              <ul className="list-disc pl-4 text-xs text-[#52514E] space-y-1 leading-relaxed">
                <li>
                  Documented 12 component states (default, active, disabled, loading, error) to clarify expected interface behavior.
                </li>
                <li>
                  Specified responsive behavior at 3 viewport widths and documented spacing, typography, and interaction requirements for developer handoff.
                </li>
                <li>
                  Built a small interactive prototype demonstrating caption-toggle behavior and immediate visual feedback, connecting design decisions with implementation feasibility.
                </li>
              </ul>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <button
                  type="button"
                  onClick={() => onNavigate(AppRoute.DashboardCaseStudy)}
                  className="text-left text-sm font-bold text-[#141413] hover:text-[#C8102E] transition-colors cursor-pointer"
                >
                  Creator Studio — Analytics Dashboard Redesign
                </button>
                <span className="text-xs text-[#73716C]">
                  Figma · Information Architecture · Data Visualization · Responsive Design
                </span>
              </div>
              <ul className="list-disc pl-4 text-xs text-[#52514E] space-y-1 leading-relaxed">
                <li>
                  Redesigned a creator analytics dashboard around 3 key tasks: reviewing video performance, comparing engagement, and identifying content trends.
                </li>
                <li>
                  Created 10 high-fidelity screens and a reusable set of 8 UI components for consistent dashboard interactions.
                </li>
                <li>
                  Designed loading, empty, error, and populated states to communicate system status and support predictable navigation.
                </li>
                <li>
                  Compared 2 layout directions and selected the final concept based on information hierarchy, readability, and implementation simplicity.
                </li>
              </ul>
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-2">
            <h2 className="text-xs font-semibold text-[#73716C]">Experience</h2>
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <p className="text-sm font-bold text-[#141413]">
                  DSA &amp; Programming Instructor, AISECT Academy
                </p>
                <span className="font-mono text-xs text-[#52514E] tabular-nums">
                  Feb 2026 – Present
                </span>
              </div>
              <ul className="list-disc pl-4 text-xs text-[#52514E] space-y-1 leading-relaxed">
                <li>
                  Explain complex technical concepts through structured examples, adapting explanations for learners with different experience levels.
                </li>
                <li>
                  Guide students through programming exercises and projects, using feedback to identify misunderstandings and clarify difficult concepts.
                </li>
                <li>
                  Break complex workflows into manageable steps, strengthening communication and collaborative problem-solving.
                </li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-2.5">
            <h2 className="text-xs font-semibold text-[#73716C]">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs">
              {SKILL_GROUPS.map((g) => (
                <div key={g.category}>
                  <span className="font-semibold text-[#141413]">{g.category}: </span>
                  <span className="text-[#52514E]">{g.appliedItems.join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="space-y-2">
            <h2 className="text-xs font-semibold text-[#73716C]">Achievements</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-xs text-[#52514E] list-disc pl-4">
              {ACHIEVEMENTS_LIST.map((a) => (
                <li key={a.title}>
                  <span className="font-semibold text-[#141413]">{a.title}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};
