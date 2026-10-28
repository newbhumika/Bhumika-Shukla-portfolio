import React from 'react';
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';
import { AppRoute } from '../types/portfolio';
import { CONTRAST_AUDIT_DATA } from '../data/portfolioData';
import { CaptionPlayerMockup } from '../components/CaptionPlayerMockup';
import { MicroInteractionSection } from '../components/MicroInteractionSection';

interface CaptionCaseStudyPageProps {
  onNavigate: (route: AppRoute, sectionId?: string) => void;
}

const CHAPTERS = [
  { id: 'cs-overview', label: '01. Overview' },
  { id: 'cs-problem', label: '02. The Problem' },
  { id: 'cs-research', label: '03. User Research (n = 6)' },
  { id: 'cs-insight', label: '04. Key Insight' },
  { id: 'cs-explorations', label: '05. Rejected vs. Selected' },
  { id: 'cs-flows', label: '06. 3 Flows & 8 Wireframes' },
  { id: 'cs-final-design', label: '07. Final Design' },
  { id: 'cs-accessibility', label: '08. Accessibility Audit' },
  { id: 'cs-evaluation', label: '09. Usability Evaluation' },
  { id: 'cs-handoff', label: '10. Engineering Handoff' },
  { id: 'cs-reflection', label: '11. Reflection' },
];

export const CaptionCaseStudyPage: React.FC<CaptionCaseStudyPageProps> = ({
  onNavigate,
}) => {
  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      {/* Top Breadcrumb */}
      <div className="mb-8">
        <button
          type="button"
          onClick={() => onNavigate(AppRoute.Home, 'work')}
          className="inline-flex items-center gap-2 text-xs font-medium text-[#52514E] hover:text-[#141413] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Portfolio Overview</span>
        </button>
      </div>

      {/* Case Study Header */}
      <header className="space-y-6 pb-12 border-b border-[#E6E4DF]">
        <div className="space-y-3 max-w-3xl">
          <p className="text-xs font-medium text-[#73716C]">
            Independent UX Concept · Mobile Interaction Design &amp; Accessibility
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141413] leading-[1.12]">
            Making Caption Controls Easier to Discover
          </h1>
          <p className="text-base sm:text-lg text-[#52514E] leading-relaxed">
            Exploring how mobile viewers can discover and adjust caption readability—size, background window contrast, and language track—without losing their place in the video.
          </p>
        </div>

        {/* Overview Metadata Grid */}
        <dl
          id="cs-overview"
          className="pt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-xs"
        >
          <div>
            <dt className="font-semibold text-[#141413]">Project Type</dt>
            <dd className="mt-1 text-[#52514E]">Independent UX concept</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#141413]">Focus</dt>
            <dd className="mt-1 text-[#52514E]">Mobile interaction &amp; accessibility</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#141413]">Tools</dt>
            <dd className="mt-1 text-[#52514E]">Figma, FigJam, WCAG Contrast Checker</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#141413]">Completed Role</dt>
            <dd className="mt-1 text-[#52514E]">
              User research (n = 6), interaction design, prototyping, accessibility evaluation
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[#141413]">Timeline</dt>
            <dd className="mt-1 font-mono tabular-nums text-[#52514E]">3 weeks (Oct 2026)</dd>
          </div>
        </dl>
      </header>

      {/* Main Content with Desktop Chapter Rail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-12">
        {/* Sticky Chapter Sidebar (Desktop) */}
        <aside className="hidden lg:block lg:col-span-3">
          <nav
            aria-label="Case study chapters"
            className="sticky top-22 space-y-1.5 text-xs"
          >
            <p className="font-semibold text-[#141413] pb-2 mb-2 border-b border-[#E6E4DF]">
              Contents
            </p>
            {CHAPTERS.map((chap) => (
              <button
                key={chap.id}
                type="button"
                onClick={() => scrollToChapter(chap.id)}
                className="block w-full text-left py-1.5 text-[#52514E] hover:text-[#C8102E] transition-colors cursor-pointer"
              >
                {chap.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Case Study Body */}
        <div className="lg:col-span-9 space-y-20">
          {/* 02. THE PROBLEM */}
          <section id="cs-problem" className="space-y-4 scroll-mt-20">
            <p className="text-xs font-medium text-[#73716C]">02. The Problem</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]">
              Toggling captions is one tap; making them readable takes a detour.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#52514E] leading-relaxed max-w-3xl">
              <p>
                On mobile video apps, the top-bar <span className="font-mono text-[#141413]">[CC]</span> icon acts strictly as a binary on/off switch. Yet readability depends heavily on context: a student watching a coding lecture on a bright bus commute needs high-contrast caption windows and larger text, while a multilingual viewer switching between auto-generated and translated tracks needs rapid language access.
              </p>
              <p>
                Today, changing caption language requires opening a general settings gear sheet, and adjusting caption size or background opacity often pushes the user all the way out of playback into app-level preferences or OS accessibility menus.
              </p>
              <div className="p-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-2">
                <p className="text-xs font-semibold text-[#141413]">Disciplined Scope Constraint</p>
                <p className="text-sm text-[#141413]">
                  How might we help mobile viewers discover and adjust caption language, size, and contrast directly in context—without redesigning the broader video platform or cluttering the 16:9 viewport?
                </p>
              </div>
            </div>
          </section>

          {/* 03. RESEARCH */}
          <section id="cs-research" className="space-y-6 scroll-mt-20 border-t border-[#E6E4DF] pt-14">
            <div className="space-y-2">
              <p className="text-xs font-medium text-[#73716C]">
                03. User Research · Moderated Evaluation (n = 6 Participants)
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]">
                Evaluating how mobile viewers locate and adjust captions
              </h2>
              <p className="text-sm text-[#52514E] max-w-3xl leading-relaxed">
                To ground the exploration in observed behavior, I evaluated the baseline mobile video-watching experience with <span className="font-mono text-[#141413]">6 participants</span> across common mobile viewing scenarios, focusing on caption discoverability and playback-control navigation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-2.5">
                <h3 className="text-sm font-bold text-[#141413]">Research Question &amp; Tasks</h3>
                <p className="text-xs sm:text-sm text-[#52514E] leading-relaxed">
                  Can viewers enable captions, switch caption tracks, and improve text legibility over bright footage without losing their place in an active video? Participants completed three structured tasks: toggling captions on, locating caption styling/language controls, and resuming playback seamlessly.
                </p>
              </div>

              <div className="p-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-2.5">
                <h3 className="text-sm font-bold text-[#141413]">Round 1 Baseline Findings (n = 6)</h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#52514E] list-disc pl-4">
                  <li>
                    <strong className="text-[#141413]">4 of 6 participants struggled</strong> to locate caption settings during the initial test; only <span className="font-mono text-[#141413]">2 of 6</span> found styling controls without assistance.
                  </li>
                  <li>
                    Participants expected caption appearance options to live near the top-bar <span className="font-mono text-[#141413]">[CC]</span> toggle rather than buried inside general app or OS settings.
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-2 text-xs text-[#52514E] leading-relaxed">
              <h3 className="text-sm font-bold text-[#141413]">Study Scope &amp; Limitations</h3>
              <p>
                While a 6-participant formative sample reliably surfaced core navigation friction, a small university-aged cohort does not capture the full spectrum of assistive-technology configurations (such as dedicated braille displays or switch hardware) or older low-vision demographics.
              </p>
            </div>
          </section>

          {/* 04. KEY INSIGHT */}
          <section id="cs-insight" className="space-y-6 scroll-mt-20 border-t border-[#E6E4DF] pt-14">
            <div className="space-y-2 max-w-3xl">
              <p className="text-xs font-medium text-[#73716C]">04. Key Insight</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]">
                Separating observed interface mechanics from untested behavioral assumptions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-3">
                <p className="text-xs font-semibold text-[#141413]">
                  Verified Interface Observations (Checked via Heuristic &amp; Contrast Audit)
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#52514E] leading-relaxed list-disc pl-4">
                  <li>
                    <strong className="text-[#141413]">Split mental model:</strong> Turning captions on happens in the top player bar (1 tap), language lives inside the gear sheet (3 taps), and text size/contrast sits outside playback in account/OS settings (5+ taps).
                  </li>
                  <li>
                    <strong className="text-[#141413]">Blind adjustment problem:</strong> When styling lives in system settings, users configure font size on a static sample card rather than seeing whether two lines wrap awkwardly on their actual video.
                  </li>
                  <li>
                    <strong className="text-[#141413]">Luminance drop-outs:</strong> Light or translucent caption backgrounds fall as low as <span className="font-mono text-[#141413]">1.14:1</span> over sunlit footage.
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-[#FAF9F6] border border-[#E6E4DF] rounded-xl space-y-3">
                <p className="text-xs font-semibold text-[#141413]">
                  Assumptions Requiring Participant Verification
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#52514E] leading-relaxed list-disc pl-4">
                  <li>
                    Whether a 4-second auto-dismissing <span className="font-mono text-[#141413]">Customize</span> pill gives slow readers enough time to react without lingering too long over top-right video details.
                  </li>
                  <li>
                    Whether three curated size presets (<span className="font-mono text-[#141413]">14sp / 16sp / 20sp</span>) satisfy low-vision mobile viewers or whether an extra-large <span className="font-mono text-[#141413]">24sp</span> step is necessary despite 3-line wrapping trade-offs.
                  </li>
                  <li>
                    How frequently users adjust caption window contrast per video versus setting a single high-contrast preference once.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 05. EXPLORATION & REJECTED DIRECTIONS */}
          <section id="cs-explorations" className="space-y-6 scroll-mt-20 border-t border-[#E6E4DF] pt-14">
            <div className="space-y-2 max-w-3xl">
              <p className="text-xs font-medium text-[#73716C]">05. Exploration &amp; Rejected Directions</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]">
                Evaluating three competing interaction models
              </h2>
              <p className="text-sm text-[#52514E] leading-relaxed">
                Making controls “more discoverable” is easy if you permanently pin buttons onto the video—but doing so harms the viewing experience for everyone else. Here is how three alternatives compared.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Option A: Rejected */}
              <div className="p-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#73716C]">Direction A</span>
                    <span className="inline-flex items-center gap-1 font-medium text-[#52514E]">
                      <X className="w-3.5 h-3.5 text-[#C8102E]" aria-hidden="true" />
                      <span>Rejected</span>
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#141413]">
                    Dedicated Full-Screen Caption Settings Page
                  </h3>
                  <p className="text-xs text-[#52514E] leading-relaxed">
                    Opened a standalone full-screen settings page with a static preview card for font family, size, and opacity.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E6E4DF] text-xs text-[#52514E] space-y-1">
                  <p className="font-semibold text-[#141413]">Why it was rejected:</p>
                  <p>
                    Interrupted playback continuity completely, added back-navigation effort, and hid the actual video scene users were trying to read against.
                  </p>
                </div>
              </div>

              {/* Option B: Rejected */}
              <div className="p-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#73716C]">Direction B</span>
                    <span className="inline-flex items-center gap-1 font-medium text-[#52514E]">
                      <X className="w-3.5 h-3.5 text-[#C8102E]" aria-hidden="true" />
                      <span>Rejected</span>
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#141413]">
                    Direct Pinch-to-Resize on Caption Box
                  </h3>
                  <p className="text-xs text-[#52514E] leading-relaxed">
                    Allowed two-finger pinch directly on the live subtitle box to scale font size fluidly without any menu.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E6E4DF] text-xs text-[#52514E] space-y-1">
                  <p className="font-semibold text-[#141413]">Why it was rejected:</p>
                  <p>
                    Zero visual signifier (violates discoverability goal), conflicts directly with existing mobile pinch-to-zoom video gestures, and excludes one-handed or switch-access users.
                  </p>
                </div>
              </div>

              {/* Option C: Selected */}
              <div className="p-5 bg-[#FAF9F6] border border-[#141413] rounded-xl flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#141413]">Direction C</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[#C8102E]">
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Selected</span>
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#141413]">
                    Transient Contextual Anchor + Docked Quick-Sheet
                  </h3>
                  <p className="text-xs text-[#52514E] leading-relaxed">
                    Preserves 1-tap <span className="font-mono">[CC]</span> toggle, briefly surfaces a non-blocking <span className="font-mono">Language · Customize</span> pill + explicit options button, and opens a half-sheet below the live video.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E6E4DF] text-xs text-[#52514E] space-y-1">
                  <p className="font-semibold text-[#141413]">Why it won:</p>
                  <p>
                    Zero permanent video occlusion, live visual feedback while adjusting size/contrast, and full keyboard/switch parity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 06. USER FLOWS & LOW-FIDELITY WIREFRAMES */}
          <section id="cs-flows" className="space-y-6 scroll-mt-20 border-t border-[#E6E4DF] pt-14">
            <div className="space-y-2 max-w-3xl">
              <p className="text-xs font-medium text-[#73716C]">
                06. 3 User Flows &amp; 8 Low-Fidelity Wireframes
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]">
                Collapsing a 5-step context switch into a 2-step player-level interaction
              </h2>
              <p className="text-sm text-[#52514E] leading-relaxed">
                Across 3 core user flows (activation, live legibility styling, and track switching) and 8 low-fidelity wireframes, I iterated on control spacing and sheet height to preserve playback continuity.
              </p>
            </div>

            {/* Flow Comparison */}
            <div className="bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl p-5 sm:p-6 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-[#73716C]">
                  Baseline Flow (Current Fragmentation — Loses Video Context)
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#52514E]">
                  <span className="px-2.5 py-1.5 rounded bg-[#FAF9F6] border border-[#E6E4DF]">1. Tap Video</span>
                  <span aria-hidden="true">→</span>
                  <span className="px-2.5 py-1.5 rounded bg-[#FAF9F6] border border-[#E6E4DF]">2. Tap Gear Icon</span>
                  <span aria-hidden="true">→</span>
                  <span className="px-2.5 py-1.5 rounded bg-[#FAF9F6] border border-[#E6E4DF]">3. Tap Captions Row</span>
                  <span aria-hidden="true">→</span>
                  <span className="px-2.5 py-1.5 rounded bg-[#FAF9F6] border border-[#E6E4DF]">4. Exit to App / OS Settings</span>
                  <span aria-hidden="true">→</span>
                  <span className="px-2.5 py-1.5 rounded bg-[#FAF9F6] border border-[#E6E4DF]">5. Return &amp; Check Fit</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E6E4DF] space-y-2">
                <p className="text-xs font-semibold text-[#141413]">
                  Proposed Flow (Contextual Quick-Sheet — Live Video Remains Visible)
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#141413] font-medium">
                  <span className="px-3 py-1.5 rounded bg-[#FAF9F6] border border-[#141413]">
                    1. Tap [CC] On (Surfaces “English · Customize” Anchor)
                  </span>
                  <span aria-hidden="true">→</span>
                  <span className="px-3 py-1.5 rounded bg-[#FAF9F6] border border-[#C8102E]">
                    2. Tap “Customize” (Adjust Size/Contrast with Live Video Above)
                  </span>
                </div>
              </div>
            </div>

            {/* Low-Fidelity Wireframe Progression */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  step: 'Wireframe 01 · Top Chrome Zoning',
                  desc: 'Separated [CC] and [Caption Options] by 8dp with dedicated 48×48dp tap bounds so thumbs do not accidentally trigger autoplay or cast icons.',
                  diagram: (
                    <div className="h-28 rounded-lg border border-dashed border-[#C5C2BA] bg-[#FAF9F6] p-3 flex flex-col justify-between font-mono text-[10px] text-[#52514E]">
                      <div className="flex justify-between items-center">
                        <span>[Title...]</span>
                        <div className="flex gap-1.5">
                          <span className="px-1.5 py-1 border border-[#141413]">[CC]</span>
                          <span className="px-1.5 py-1 border border-[#73716C]">[Opt]</span>
                        </div>
                      </div>
                      <div className="self-end px-2 py-0.5 border border-[#141413] bg-white">
                        [EN · Customize &gt;]
                      </div>
                    </div>
                  ),
                },
                {
                  step: 'Wireframe 02 · Safe Subtitle Clearance',
                  desc: 'Reserved a 36dp vertical buffer above the timeline scrub bar whenever player controls are visible, preventing progress thumbs from covering text.',
                  diagram: (
                    <div className="h-28 rounded-lg border border-dashed border-[#C5C2BA] bg-[#FAF9F6] p-3 flex flex-col justify-end gap-2 font-mono text-[10px] text-[#52514E]">
                      <div className="mx-auto px-3 py-1 border border-[#141413] bg-white text-center">
                        [Two-line max subtitle box]
                      </div>
                      <div className="h-1.5 w-full bg-[#D8D5CE] rounded" />
                    </div>
                  ),
                },
                {
                  step: 'Wireframe 03 · Split Portrait Sheet',
                  desc: 'Kept the 16:9 player pinned at the top 35% of the screen while docking 3 high-frequency controls (Track, Size, Contrast) in the lower sheet.',
                  diagram: (
                    <div className="h-28 rounded-lg border border-dashed border-[#C5C2BA] bg-[#FAF9F6] p-2.5 flex flex-col gap-1.5 font-mono text-[10px] text-[#52514E]">
                      <div className="h-10 border border-[#73716C] flex items-center justify-center">
                        [Pinned 16:9 Live Video]
                      </div>
                      <div className="flex-1 border border-[#141413] bg-white p-1.5 flex flex-col justify-center gap-1">
                        <span>Track: [EN] [HI] [Off]</span>
                        <span>Size:  [14] [16] [20]</span>
                      </div>
                    </div>
                  ),
                },
              ].map((wf) => (
                <div
                  key={wf.step}
                  className="p-4 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-3"
                >
                  {wf.diagram}
                  <h3 className="text-xs font-bold text-[#141413]">{wf.step}</h3>
                  <p className="text-xs text-[#52514E] leading-relaxed">{wf.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 07. FINAL DESIGN (INTERACTIVE SUITE) */}
          <section id="cs-final-design" className="space-y-6 scroll-mt-20 border-t border-[#E6E4DF] pt-14">
            <div className="space-y-2 max-w-3xl">
              <p className="text-xs font-medium text-[#73716C]">07. Final Design</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]">
                High-fidelity mobile screens, control states, and edge conditions
              </h2>
              <p className="text-sm text-[#52514E] leading-relaxed">
                Use the toolbar below to inspect all four screen groups—active captions, the live styling quick-sheet, active/inactive/focus control states, and network/unavailable edge states—across both mid-tone and sunlit video frames.
              </p>
            </div>

            <CaptionPlayerMockup mode="full-suite" />
          </section>

          {/* 08. ACCESSIBILITY ANNOTATIONS */}
          <section id="cs-accessibility" className="space-y-6 scroll-mt-20 border-t border-[#E6E4DF] pt-14">
            <div className="space-y-2 max-w-3xl">
              <p className="text-xs font-medium text-[#73716C]">08. Accessibility Annotations</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]">
                Measured contrast ratios, touch targets, switch parity, and motion rules
              </h2>
              <p className="text-sm text-[#52514E] leading-relaxed">
                Every contrast ratio below was explicitly calculated using the WCAG 2.2 relative luminance formula against the exact foreground and background hex/alpha composites used in the mockup.
              </p>
            </div>

            {/* Measured Contrast Table */}
            <div className="bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-[#E6E4DF] bg-[#FAF9F6] text-[#52514E]">
                    <th className="py-3 px-4 font-semibold">Interface Element</th>
                    <th className="py-3 px-4 font-semibold">Foreground / Background</th>
                    <th className="py-3 px-4 font-semibold">Measured Ratio</th>
                    <th className="py-3 px-4 font-semibold">Verification Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6E4DF]">
                  {CONTRAST_AUDIT_DATA.map((row) => (
                    <tr key={row.element}>
                      <td className="py-3.5 px-4">
                        <p className="font-semibold text-[#141413]">{row.element}</p>
                        <p className="text-[11px] text-[#73716C] mt-0.5">{row.notes}</p>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[11px] text-[#52514E]">
                        <div>FG: {row.foreground}</div>
                        <div>BG: {row.background}</div>
                      </td>
                      <td className="py-3.5 px-4 font-mono tabular-nums font-bold text-[#141413] whitespace-nowrap">
                        {row.measuredRatio}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-[#141413] whitespace-nowrap">
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Additional A11y Dimensions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              <div className="p-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-2">
                <h3 className="text-sm font-bold text-[#141413]">Touch Targets &amp; Switch Access</h3>
                <p className="text-[#52514E] leading-relaxed">
                  All player bar triggers enforce a <span className="font-mono text-[#141413]">48 × 48dp</span> touch target with an <span className="font-mono text-[#141413]">8dp</span> dead-zone gap. Crucially, opening the Quick-Sheet never relies solely on a long-press gesture: an explicit <span className="font-mono text-[#141413]">Caption Options</span> button sits next to <span className="font-mono text-[#141413]">[CC]</span> in the tab/switch scan order.
                </p>
              </div>
              <div className="p-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-2">
                <h3 className="text-sm font-bold text-[#141413]">Screen Readers &amp; Reduced Motion</h3>
                <p className="text-[#52514E] leading-relaxed">
                  State toggles announce current track status (<span className="font-mono text-[#141413]">aria-pressed</span> + polite live region) without stealing focus from the button. When <span className="font-mono text-[#141413]">prefers-reduced-motion: reduce</span> is enabled, sheet slide-up transitions convert to a <span className="font-mono text-[#141413]">120ms</span> opacity crossfade.
                </p>
              </div>
            </div>
          </section>

          {/* Embedded Micro-Interaction State Spec inside Case Study for Continuity */}
          <MicroInteractionSection />

          {/* 09. USABILITY EVALUATION (ROUND 1 VS ROUND 2) */}
          <section id="cs-evaluation" className="space-y-6 scroll-mt-20 border-t border-[#E6E4DF] pt-14">
            <div className="space-y-2 max-w-3xl">
              <p className="text-xs font-medium text-[#73716C]">
                09. Usability Evaluation · Two-Round Comparison (n = 6)
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]">
                From 2 of 6 in Round 1 to 6 of 6 in Round 2
              </h2>
              <p className="text-sm text-[#52514E] leading-relaxed">
                After redesigning the control flow around the in-player contextual anchor and docked quick-sheet, I ran a second usability round with 6 participants using the interactive Figma prototype.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              <div className="p-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-2">
                <p className="font-mono text-[#73716C]">Round 1 · Baseline Navigation</p>
                <p className="text-2xl font-bold font-mono tabular-nums text-[#141413]">
                  2 / 6 located controls
                </p>
                <p className="text-[#52514E] leading-relaxed">
                  4 of 6 participants hunted repeatedly inside the playback gear sheet or abandoned the task before reaching external caption styling menus.
                </p>
              </div>

              <div className="p-5 bg-[#FAF9F6] border border-[#141413] rounded-xl space-y-2">
                <p className="font-mono text-[#141413]">Round 2 · Redesigned Player-Level Flow</p>
                <p className="text-2xl font-bold font-mono tabular-nums text-[#C8102E]">
                  6 / 6 located controls
                </p>
                <p className="text-[#52514E] leading-relaxed">
                  All 6 participants located caption styling and language options directly from the player without pausing or losing their place in the video.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {[
                {
                  task: 'Task 1 · Glare Recovery',
                  prompt: '“Make the captions readable over the sunlit scene without leaving the video.”',
                  criteria: 'Observed: Participants tapped either the post-toggle Customize pill or adjacent Options icon to switch contrast.',
                },
                {
                  task: 'Task 2 · Track Switching',
                  prompt: '“Switch the spoken English video captions to Hindi while keeping playback running.”',
                  criteria: 'Observed: Completed directly inside the docked Quick-Sheet with live video visible above.',
                },
                {
                  task: 'Task 3 · Design Adjustment Made',
                  prompt: 'Refinement between wireframes and Round 2 prototype',
                  criteria: 'Increased spacing between [CC] and Options trigger to 8dp and added a 36dp bottom safe buffer above the scrub bar.',
                },
              ].map((t) => (
                <div
                  key={t.task}
                  className="p-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-2.5"
                >
                  <h3 className="text-sm font-bold text-[#141413]">{t.task}</h3>
                  <p className="text-[#141413] italic leading-relaxed">{t.prompt}</p>
                  <p className="pt-2 border-t border-[#E6E4DF] text-[#52514E] leading-relaxed">
                    {t.criteria}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 10. DESIGN-TO-DEVELOPMENT HANDOFF */}
          <section id="cs-handoff" className="space-y-6 scroll-mt-20 border-t border-[#E6E4DF] pt-14">
            <div className="space-y-2 max-w-3xl">
              <p className="text-xs font-medium text-[#73716C]">
                10. Design-to-Development Handoff · 12 States &amp; 3 Viewport Widths
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]">
                Component architecture, responsive rules, and what reuses existing player primitives
              </h2>
              <p className="text-sm text-[#52514E] leading-relaxed">
                To connect design decisions with implementation feasibility, I documented <span className="font-mono text-[#141413]">12 explicit component states</span> (across default, active, focus-visible, pressed, disabled/unavailable, track-loading, and sync-error variants) and specified responsive behavior across <span className="font-mono text-[#141413]">3 viewport widths</span> (<span className="font-mono text-[#141413]">360dp</span> compact portrait, <span className="font-mono text-[#141413]">390dp</span> standard portrait, and <span className="font-mono text-[#141413]">844dp</span> fullscreen landscape).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-3">
                <h3 className="text-sm font-bold text-[#141413]">
                  What Reuses Existing Patterns (Zero New Backend API Required)
                </h3>
                <ul className="space-y-2 text-[#52514E] leading-relaxed list-disc pl-4">
                  <li>
                    <strong className="text-[#141413]">Caption payload &amp; styling:</strong> Standard WebVTT / timed-text cues and client-side <span className="font-mono text-[#141413]">CaptionStyle</span> user preferences already exist on mobile clients; no server-side schema or new API endpoint is required.
                  </li>
                  <li>
                    <strong className="text-[#141413]">Sheet container:</strong> Reuses the standard modal/docked <span className="font-mono text-[#141413]">BottomSheet</span> container already used for video quality and playback speed.
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-xl space-y-3">
                <h3 className="text-sm font-bold text-[#141413]">
                  What Requires New Client Implementation Work
                </h3>
                <ul className="space-y-2 text-[#52514E] leading-relaxed list-disc pl-4">
                  <li>
                    <strong className="text-[#141413]">Transient <span className="font-mono">CaptionContextPill</span> timer logic:</strong> Needs a 4,000ms auto-dismiss timer that pauses dismissal when screen-reader focus or pointer hover enters the pill.
                  </li>
                  <li>
                    <strong className="text-[#141413]">Landscape responsive adaptation:</strong> In fullscreen landscape (<span className="font-mono text-[#141413]">&gt; 600dp</span> width), a bottom sheet would cover the video; instead, the sheet docks as a <span className="font-mono text-[#141413]">320dp</span> right-hand side drawer while shrinking/letterboxing the video canvas to the left.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 11. REFLECTION */}
          <section id="cs-reflection" className="space-y-4 scroll-mt-20 border-t border-[#E6E4DF] pt-14">
            <p className="text-xs font-medium text-[#73716C]">11. Reflection</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]">
              What changed, what stays uncertain, and next steps
            </h2>
            <div className="space-y-4 text-sm text-[#52514E] leading-relaxed max-w-3xl">
              <p>
                <strong className="text-[#141413]">What did not work initially:</strong> My earliest sketches placed font-size plus/minus buttons directly inside the video overlay. Testing that layout at <span className="font-mono text-[#141413]">360 × 640dp</span> quickly showed that adding even two extra permanent icons competed with chapter scrubbing and hurt viewers who never touch caption settings.
              </p>
              <p>
                <strong className="text-[#141413]">What remains uncertain:</strong> Without moderated sessions with regular TalkBack/VoiceOver and D/deaf viewers, the 4-second timeout on the contextual <span className="font-mono text-[#141413]">Customize</span> pill is still an educated starting value rather than a proven threshold.
              </p>
              <p>
                <strong className="text-[#141413]">What I would investigate next:</strong> Run the 6-participant protocol above, test whether per-channel language memory (e.g., remembering English on technical lectures vs. Hindi on vlogs) reduces repetitive toggling, and evaluate fullscreen landscape side-sheet ergonomics on small phones.
              </p>
            </div>
          </section>

          {/* Next Project Navigation Card */}
          <div className="pt-10 border-t border-[#E6E4DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-[#73716C]">Next Supporting Case Study</p>
              <p className="text-base font-bold text-[#141413]">
                Helping Creators Understand Their Analytics
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate(AppRoute.DashboardCaseStudy)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#141413] rounded-lg hover:bg-[#C8102E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Read Supporting Study</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
