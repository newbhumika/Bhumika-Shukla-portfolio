import React from 'react';
import { ArrowRight, Check, SlidersHorizontal, Subtitles } from 'lucide-react';
import { AppRoute } from '../types/portfolio';
import {
  ACHIEVEMENTS_LIST,
  PROFILE_INFO,
  SKILL_GROUPS,
} from '../data/portfolioData';
import { CaptionPlayerMockup } from '../components/CaptionPlayerMockup';
import { MicroInteractionSection } from '../components/MicroInteractionSection';
import { CreatorDashboardMockup } from '../components/CreatorDashboardMockup';

interface HomePageProps {
  onNavigate: (route: AppRoute, sectionId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      {/* 1. HERO SECTION */}
      <section aria-labelledby="hero-heading" className="py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            <h1
              id="hero-heading"
              className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141413] leading-[1.12] max-w-2xl"
            >
              Designing clearer, more accessible digital experiences.
            </h1>

            <p className="text-base sm:text-lg text-[#141413]/90 leading-relaxed max-w-xl">
              I’m Bhumika, a Computer Science undergraduate interested in UX design, accessibility, interaction design, and the intersection of people and technology.
            </p>

            <p className="text-sm sm:text-base text-[#52514E] leading-relaxed max-w-xl">
              I focus on understanding specific user friction points, comparing competing design alternatives honestly, and translating ideas into practical, accessible interfaces that respect real engineering constraints.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => onNavigate(AppRoute.Home, 'work')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#C8102E] rounded-lg hover:bg-[#A50D26] transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate(AppRoute.Resume)}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-[#141413] bg-[#FFFFFF] border border-[#E6E4DF] rounded-lg hover:border-[#141413]/40 transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] cursor-pointer"
              >
                View Resume
              </button>
            </div>
          </div>

          {/* Right Column: Compact Figma Interface Mockup Artifact (Zero Stock Photography) */}
          <div className="lg:col-span-5">
            <div
              onClick={() => onNavigate(AppRoute.CaptionCaseStudy)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onNavigate(AppRoute.CaptionCaseStudy);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Inspect featured mobile caption controls UX exploration"
              className="group bg-[#FFFFFF] border border-[#E6E4DF] rounded-2xl p-5 hover:border-[#141413]/35 transition-colors duration-150 cursor-pointer"
            >
              <div className="flex items-center justify-between text-[11px] text-[#73716C] pb-3.5 mb-4 border-b border-[#E6E4DF]">
                <span className="font-medium text-[#141413]">
                  Figma Frame · Mobile Caption Quick-Sheet
                </span>
                <span className="font-mono tabular-nums">WCAG 2.2 Audit</span>
              </div>

              {/* Miniature UI Specification Card */}
              <div className="rounded-xl bg-[#141413] p-4 text-white space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-white/75 truncate">
                    Player Top Chrome · 48×48dp Hitbox
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="px-2 py-1 rounded bg-white/10 border border-dashed border-[#FFD600]/80 flex items-center gap-1.5">
                      <Subtitles className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                      <span className="font-mono text-[10px] text-[#FFD600]">48dp</span>
                    </div>
                    <div className="p-1.5 rounded bg-white/10">
                      <SlidersHorizontal className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Live Caption Readability Sample */}
                <div className="py-4 px-3 rounded-lg bg-[#232321] border border-white/10 text-center space-y-1.5">
                  <p className="inline-block px-2.5 py-1 rounded bg-[#0A0A0A]/90 text-xs font-medium text-white">
                    “Check diode polarity before soldering row two.”
                  </p>
                  <p className="font-mono text-[10px] text-white/70 tabular-nums">
                    Window Contrast: 15.4 : 1 (Passes WCAG AAA)
                  </p>
                </div>

                {/* Miniature Docked Quick-Sheet Controls */}
                <div className="rounded-lg bg-[#FFFFFF] text-[#141413] p-3 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold">Caption Appearance</span>
                    <span className="font-mono text-[10px] text-[#73716C]">2-tap access</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-[10px] font-medium text-center">
                    <div className="py-1 rounded bg-[#FAF9F6] border border-[#E6E4DF] text-[#52514E]">
                      14sp
                    </div>
                    <div className="py-1 rounded bg-[#141413] text-white flex items-center justify-center gap-1">
                      <Check className="w-2.5 h-2.5" aria-hidden="true" />
                      <span>16sp</span>
                    </div>
                    <div className="py-1 rounded bg-[#FAF9F6] border border-[#E6E4DF] text-[#52514E]">
                      20sp
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-[#52514E]">
                  Independent UX Concept · Centerpiece Study
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#C8102E] group-hover:translate-x-0.5 transition-transform duration-150">
                  <span>Open study</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECTED WORK — CENTERPIECE CASE STUDY */}
      <section
        id="work"
        aria-labelledby="featured-work-heading"
        className="border-t border-[#E6E4DF] py-16 sm:py-20 space-y-12"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-medium text-[#73716C]">
              01. Featured Case Study · Primary Focus
            </p>
            <h2
              id="featured-work-heading"
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[#141413]"
            >
              Making Caption Controls Easier to Discover
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate(AppRoute.CaptionCaseStudy)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#141413] rounded-lg hover:bg-[#C8102E] transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] cursor-pointer"
          >
            <span>Read Full Case Study</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Clean Unboxed Metadata */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#52514E] -mt-6">
          <span className="font-medium text-[#141413]">Independent UX Concept</span>
          <span aria-hidden="true">·</span>
          <span>Mobile Interaction Design &amp; Accessibility</span>
          <span aria-hidden="true">·</span>
          <span>Figma &amp; FigJam</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-base font-bold text-[#141413]">
              Narrow problem scope, deep interaction rigor
            </h3>
            <p className="text-sm text-[#52514E] leading-relaxed">
              Turning captions on or off in mobile video players takes one tap, yet adjusting caption readability—font size, window contrast over bright scenes, or secondary language tracks—frequently requires leaving the player or navigating four layers deep into settings.
            </p>
            <p className="text-sm text-[#52514E] leading-relaxed">
              Rather than redesigning an entire video app, this exploration isolates that single workflow: testing competing UI patterns, measuring WCAG 2.2 contrast across high-glare frames, and documenting component handoff specs.
            </p>

            <div className="pt-2 space-y-2 border-t border-[#E6E4DF] text-xs text-[#52514E]">
              <p className="font-semibold text-[#141413]">Inside the full study:</p>
              <p>01. 6-Participant Usability Study (2/6 → 6/6 Discoverability)</p>
              <p>02. 3 User Flows, 8 Wireframes &amp; Rejected Dedicated Screen</p>
              <p>03. Measured Contrast Ratios, Touch Targets &amp; Switch Access</p>
              <p>04. 12 Component States &amp; 3-Viewport Developer Handoff</p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate(AppRoute.CaptionCaseStudy)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C8102E] hover:underline underline-offset-4 cursor-pointer"
              >
                <span>Explore all 11 chapters &amp; accessibility specs</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <CaptionPlayerMockup mode="hero-preview" />
          </div>
        </div>
      </section>

      {/* 3. SMALL INTERACTION PROTOTYPE SECTION */}
      <MicroInteractionSection />

      {/* 4. SECONDARY SUPPORTING PROJECT */}
      <section
        aria-labelledby="secondary-work-heading"
        className="border-t border-[#E6E4DF] py-16 sm:py-20"
      >
        <div className="bg-[#FFFFFF] border border-[#E6E4DF] rounded-2xl p-6 sm:p-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#73716C]">
                <span>02. Supporting Case Study</span>
                <span aria-hidden="true">·</span>
                <span>Information Architecture &amp; Data Hierarchy</span>
                <span aria-hidden="true">·</span>
                <span>Conceptual UI Exploration</span>
              </div>
              <h2
                id="secondary-work-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#141413]"
              >
                Helping Creators Understand Their Analytics
              </h2>
              <p className="text-sm text-[#52514E] leading-relaxed">
                A compact supporting exploration into reducing cognitive overload for emerging creators: pairing raw view counts with 28-day channel baselines, chapter-level retention diagnostics, and complete empty, loading, and error states.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate(AppRoute.DashboardCaseStudy)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#141413] bg-[#FAF9F6] border border-[#E6E4DF] rounded-lg hover:border-[#141413]/40 transition-colors whitespace-nowrap shrink-0 min-h-[42px] cursor-pointer"
            >
              <span>View Supporting Study</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>

          <CreatorDashboardMockup compactPreview />
        </div>
      </section>

      {/* 5. ABOUT ME */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="border-t border-[#E6E4DF] py-16 sm:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-medium text-[#73716C]">About Me</p>
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]"
            >
              Bridging user empathy, clear communication, and technical feasibility.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#52514E] leading-relaxed">
            <p className="text-[#141413] font-medium text-base sm:text-lg leading-relaxed">
              “I’m a Computer Science undergraduate who enjoys solving problems and understanding how people interact with technology. My technical background helps me consider implementation constraints alongside usability, while my experience as a programming instructor has strengthened my ability to communicate complex ideas clearly.”
            </p>
            <p>
              Currently pursuing my undergraduate degree in Computer Science (graduating in 2028), I came to UX design by noticing how often technically sound software still frustrates people through hidden affordances, inaccessible defaults, or ambiguous state feedback.
            </p>
            <p>
              Teaching data structures and programming to students at AISECT Academy taught me to watch where learners hesitate before blaming user error—a habit that shapes how I critique interfaces, structure user flows, and write clear component specifications for engineers.
            </p>

            <div className="pt-4 border-t border-[#E6E4DF] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <p className="font-semibold text-[#141413]">Education</p>
                <p className="mt-1 text-[#52514E]">
                  {PROFILE_INFO.institution} · {PROFILE_INFO.degree}
                </p>
                <p className="mt-1 text-[#73716C]">
                  {PROFILE_INFO.graduation} · CGPA {PROFILE_INFO.cgpa}
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#141413]">Relevant Coursework</p>
                <p className="mt-1 text-[#52514E]">
                  {PROFILE_INFO.coursework}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SKILLS */}
      <section
        aria-labelledby="skills-heading"
        className="border-t border-[#E6E4DF] py-16 sm:py-20 space-y-10"
      >
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs font-medium text-[#73716C]">Capabilities &amp; Craft</p>
          <h2
            id="skills-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]"
          >
            Skills &amp; Working Methods
          </h2>
          <p className="text-sm text-[#52514E]">
            Focused on tools and methods I can discuss and apply directly—explicitly separating independent practice from research methods I am actively learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl p-5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <h3 className="text-base font-bold text-[#141413]">{group.category}</h3>
                <p className="text-sm text-[#141413] leading-relaxed">
                  {group.appliedItems.join(' · ')}
                </p>

                {group.learningItems && group.learningItems.length > 0 && (
                  <div className="pt-2 border-t border-[#E6E4DF] space-y-1">
                    <p className="text-xs font-semibold text-[#52514E]">
                      Currently learning &amp; preparing to practice:
                    </p>
                    <p className="text-xs text-[#73716C] leading-relaxed">
                      {group.learningItems.join(' · ')}
                    </p>
                  </div>
                )}
              </div>

              {group.note && (
                <p className="text-xs text-[#73716C] leading-relaxed pt-2 border-t border-[#E6E4DF]">
                  {group.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. EXPERIENCE & VERIFIED ACHIEVEMENTS (SECONDARY) */}
      <section
        aria-labelledby="experience-heading"
        className="border-t border-[#E6E4DF] py-16 sm:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Teaching Experience */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-medium text-[#73716C]">Teaching &amp; Mentorship</p>
            <h2
              id="experience-heading"
              className="text-2xl font-bold tracking-tight text-[#141413]"
            >
              Experience
            </h2>

            <div className="bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl p-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base font-bold text-[#141413]">
                  DSA &amp; Programming Instructor — AISECT Academy
                </h3>
                <span className="font-mono text-xs text-[#73716C] tabular-nums whitespace-nowrap">
                  February 2026 – Present
                </span>
              </div>

              <ul className="space-y-2 text-sm text-[#52514E] leading-relaxed list-disc pl-4">
                <li>
                  Break down foundational data structures, recursion, and algorithmic problem-solving into approachable visual walkthroughs for undergraduate learners.
                </li>
                <li>
                  Observe how students interpret problem statements and debug edge cases in real time, adapting explanations when an initial mental model does not click.
                </li>
                <li>
                  Practice structured technical communication that translates directly into clear UX rationale and design-to-engineering handoff notes.
                </li>
              </ul>
            </div>
          </div>

          {/* Secondary Technical & Problem-Solving Achievements */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-medium text-[#73716C]">
              Technical Problem-Solving · Secondary Context
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-[#141413]">
              Selected Achievements
            </h2>

            <div className="bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl divide-y divide-[#E6E4DF]">
              {ACHIEVEMENTS_LIST.map((ach) => (
                <div key={ach.title} className="p-4 space-y-1">
                  <p className="text-sm font-semibold text-[#141413]">{ach.title}</p>
                  <p className="text-xs text-[#52514E] leading-relaxed">{ach.context}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
