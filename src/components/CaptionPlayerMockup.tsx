import React, { useState } from 'react';
import {
  AlertCircle,
  Check,
  ChevronRight,
  Eye,
  Loader2,
  Maximize2,
  Pause,
  Play,
  RotateCcw,
  Settings,
  SlidersHorizontal,
  Subtitles,
  Volume2,
} from 'lucide-react';
import {
  CaptionMockupScreen,
  CaptionPresetStyle,
  VideoSceneLuminance,
} from '../types/portfolio';
import { VIDEO_FRAME_ASSETS } from '../data/portfolioData';

interface CaptionPlayerMockupProps {
  mode?: 'hero-preview' | 'full-suite';
}

export const CaptionPlayerMockup: React.FC<CaptionPlayerMockupProps> = ({
  mode = 'full-suite',
}) => {
  const [activeScreen, setActiveScreen] = useState<CaptionMockupScreen>(
    mode === 'hero-preview'
      ? CaptionMockupScreen.QuickSheet
      : CaptionMockupScreen.ActiveCaptions
  );
  const [scene, setScene] = useState<VideoSceneLuminance>(
    VideoSceneLuminance.MakerDesk
  );
  const [captionsEnabled, setCaptionsEnabled] = useState(true);
  const [language, setLanguage] = useState<'English' | 'Hindi (Auto)'>('English');
  const [fontScale, setFontScale] = useState<'sm' | 'md' | 'lg'>('md');
  const [preset, setPreset] = useState<CaptionPresetStyle>(
    CaptionPresetStyle.StandardDarkWindow
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [showA11ySpecs, setShowA11ySpecs] = useState(mode === 'hero-preview');
  const [imgError, setImgError] = useState(false);
  const [edgeMode, setEdgeMode] = useState<'loading' | 'error' | 'unavailable'>('error');

  const currentVideoSrc =
    scene === VideoSceneLuminance.MakerDesk
      ? VIDEO_FRAME_ASSETS.makerDesk
      : VIDEO_FRAME_ASSETS.brightCourtyard;

  const captionFontSizeClass =
    fontScale === 'sm'
      ? 'text-[11px] leading-snug'
      : fontScale === 'lg'
      ? 'text-[15px] leading-snug'
      : 'text-[13px] leading-snug';

  const getCaptionBoxClasses = () => {
    if (preset === CaptionPresetStyle.HighContrastYellow) {
      return 'bg-[#0A0A0A] text-[#FFD600] border border-[#FFD600]/40 px-2.5 py-1 rounded';
    }
    if (preset === CaptionPresetStyle.UnbackedBaseline) {
      return 'bg-transparent text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)] px-2 py-0.5';
    }
    return 'bg-[#121212]/85 text-white px-2.5 py-1 rounded';
  };

  const getContrastReadout = () => {
    if (preset === CaptionPresetStyle.HighContrastYellow) {
      return { ratio: '14.1:1', badge: 'Passes AAA' };
    }
    if (preset === CaptionPresetStyle.UnbackedBaseline) {
      return scene === VideoSceneLuminance.BrightCourtyard
        ? { ratio: '1.14:1', badge: 'Fails AA on glare' }
        : { ratio: '4.6:1', badge: 'Scene-dependent' };
    }
    return { ratio: '15.4:1', badge: 'Passes AAA' };
  };

  const contrastInfo = getContrastReadout();

  const subtitleCopy =
    language === 'English'
      ? 'Solder the diode cathode band facing the square pad on row two.'
      : 'पंक्ति दो के चौकोर पैड की ओर डायोड कैथोड बैंड को सोल्डर करें।';

  return (
    <div className="w-full space-y-4">
      {/* Interactive Toolbar for Full Case Study Mode */}
      {mode === 'full-suite' && (
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 p-3 bg-[#F3F2EE] border border-[#E6E4DF] rounded-xl">
          <div
            role="tablist"
            aria-label="Mockup screen states"
            className="flex flex-wrap items-center gap-1"
          >
            {[
              { id: CaptionMockupScreen.ActiveCaptions, label: '1. Player + Active CC' },
              { id: CaptionMockupScreen.QuickSheet, label: '2. Styling Quick-Sheet' },
              { id: CaptionMockupScreen.ControlStates, label: '3. Control States' },
              { id: CaptionMockupScreen.EdgeStates, label: '4. Loading & Error States' },
            ].map((tab) => (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={activeScreen === tab.id}
                onClick={() => setActiveScreen(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  activeScreen === tab.id
                    ? 'bg-[#FFFFFF] text-[#141413] border border-[#E6E4DF] shadow-2xs'
                    : 'text-[#52514E] hover:text-[#141413]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 bg-[#FAF9F6] p-1 rounded-lg border border-[#E6E4DF]">
              <button
                type="button"
                onClick={() => setScene(VideoSceneLuminance.MakerDesk)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  scene === VideoSceneLuminance.MakerDesk
                    ? 'bg-[#141413] text-white'
                    : 'text-[#52514E] hover:text-[#141413]'
                }`}
              >
                Mid-tone frame
              </button>
              <button
                type="button"
                onClick={() => setScene(VideoSceneLuminance.BrightCourtyard)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  scene === VideoSceneLuminance.BrightCourtyard
                    ? 'bg-[#141413] text-white'
                    : 'text-[#52514E] hover:text-[#141413]'
                }`}
              >
                High-glare frame
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowA11ySpecs((prev) => !prev)}
              aria-pressed={showA11ySpecs}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                showA11ySpecs
                  ? 'bg-[#C8102E] text-white border-[#C8102E]'
                  : 'bg-[#FFFFFF] text-[#141413] border-[#E6E4DF] hover:border-[#141413]/40'
              }`}
            >
              <Eye className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{showA11ySpecs ? 'Hide A11y Specs' : 'Show A11y Specs'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Figma-Style Inspection Frame */}
      <div className="bg-[#FFFFFF] border border-[#E6E4DF] rounded-2xl p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#E6E4DF] text-xs text-[#73716C]">
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#141413]">
              Figma Component Spec · Mobile Viewport (390 × 844dp reference)
            </span>
            <span aria-hidden="true">·</span>
            <span>Conceptual Video Player UI</span>
          </div>
          <div className="font-mono text-[11px] tabular-nums text-[#52514E]">
            Measured Window Contrast: {contrastInfo.ratio} ({contrastInfo.badge})
          </div>
        </div>

        {/* Screen 1 & Screen 2: Mobile Device Frame */}
        {(activeScreen === CaptionMockupScreen.ActiveCaptions ||
          activeScreen === CaptionMockupScreen.QuickSheet) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Mobile Frame */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-[380px] rounded-[24px] border-2 border-[#141413] bg-[#0F0F0F] text-white overflow-hidden shadow-sm">
                {/* Device Status Bar */}
                <div className="flex items-center justify-between px-5 py-2 text-[11px] font-mono tabular-nums text-white/80 bg-[#0F0F0F]">
                  <span>09:41</span>
                  <span>5G · 88%</span>
                </div>

                {/* 16:9 Video Canvas */}
                <div className="relative aspect-video w-full bg-[#1C1C1A] overflow-hidden select-none">
                  {!imgError ? (
                    <img
                      src={currentVideoSrc}
                      alt={
                        scene === VideoSceneLuminance.MakerDesk
                          ? 'Overhead maker tutorial showing hands soldering a custom mechanical keyboard circuit board'
                          : 'Bright sunlit limestone courtyard frame testing high-luminance subtitle legibility'
                      }
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#2B2A27] to-[#171715] flex items-center justify-center text-xs text-white/70 px-6 text-center">
                      16:9 Tutorial Video Canvas (Keyboard PCB Assembly)
                    </div>
                  )}

                  {/* Measured Contrast Scrim for Player Chrome */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/75 pointer-events-none"
                  />

                  {/* Top Player Bar with 48x48dp Touch Target */}
                  <div className="absolute top-0 inset-x-0 flex items-center justify-between px-3 py-2">
                    <span className="text-[11px] font-medium text-white/90 truncate max-w-[175px]">
                      04. Matrix Diode Wiring
                    </span>

                    <div className="flex items-center gap-1.5">
                      {/* CC Toggle Button */}
                      <button
                        type="button"
                        onClick={() => setCaptionsEnabled((prev) => !prev)}
                        aria-label={
                          captionsEnabled
                            ? `Captions, ${language}, on. Click to turn off.`
                            : 'Captions off. Click to turn on.'
                        }
                        aria-pressed={captionsEnabled}
                        className={`relative inline-flex flex-col items-center justify-center w-11 h-11 rounded-lg transition-colors duration-150 cursor-pointer ${
                          showA11ySpecs
                            ? 'ring-1 ring-dashed ring-[#FFD600] bg-black/55'
                            : 'hover:bg-black/45'
                        }`}
                      >
                        <Subtitles className="w-5 h-5 text-white" aria-hidden="true" />
                        {captionsEnabled && (
                          <span className="mt-0.5 w-4 h-0.5 bg-[#C8102E] rounded-full" />
                        )}
                        {showA11ySpecs && (
                          <span className="absolute -bottom-4 right-0 px-1 py-0.2 bg-[#FFD600] text-[#141413] font-mono text-[9px] font-medium rounded whitespace-nowrap">
                            48×48dp
                          </span>
                        )}
                      </button>

                      {/* Explicit Caption Options Trigger (Accessible for Switch/Keyboard Users without Long-Press) */}
                      <button
                        type="button"
                        onClick={() =>
                          setActiveScreen((prev) =>
                            prev === CaptionMockupScreen.QuickSheet
                              ? CaptionMockupScreen.ActiveCaptions
                              : CaptionMockupScreen.QuickSheet
                          )
                        }
                        aria-label="Open caption appearance and language quick sheet"
                        className="inline-flex items-center justify-center w-11 h-11 rounded-lg hover:bg-black/45 transition-colors duration-150 cursor-pointer"
                      >
                        <SlidersHorizontal className="w-4 h-4 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  {/* Contextual Transient Pill (Shown in ActiveCaptions state when CC is On) */}
                  {captionsEnabled &&
                    activeScreen === CaptionMockupScreen.ActiveCaptions && (
                      <div className="absolute top-13 right-3 z-10">
                        <button
                          type="button"
                          onClick={() => setActiveScreen(CaptionMockupScreen.QuickSheet)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141413]/92 border border-white/20 text-[11px] font-medium text-white hover:bg-[#141413] transition-colors cursor-pointer"
                        >
                          <span>{language}</span>
                          <span aria-hidden="true" className="text-white/50">·</span>
                          <span className="underline underline-offset-2">Customize</span>
                          <ChevronRight className="w-3 h-3 text-white/80" aria-hidden="true" />
                        </button>
                      </div>
                    )}

                  {/* Active Caption Window Positioned Safely Above Scrub Controls */}
                  {captionsEnabled ? (
                    <div
                      aria-live="polite"
                      className="absolute bottom-9 inset-x-3 flex flex-col items-center text-center pointer-events-none"
                    >
                      <p className={`max-w-[92%] font-medium ${captionFontSizeClass} ${getCaptionBoxClasses()}`}>
                        {subtitleCopy}
                      </p>
                      {showA11ySpecs && (
                        <span className="mt-1 px-1.5 py-0.5 bg-[#141413] text-[#FFD600] border border-[#FFD600]/50 font-mono text-[9px] rounded">
                          Contrast {contrastInfo.ratio} · Safe clearance 36dp
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="absolute bottom-10 inset-x-4 flex justify-center pointer-events-none">
                      <span className="px-2.5 py-1 rounded bg-black/75 text-[11px] text-white/85">
                        Captions turned off
                      </span>
                    </div>
                  )}

                  {/* Bottom Playback Progress & Scrub Bar */}
                  <div className="absolute bottom-0 inset-x-0 px-3 pb-2 pt-1 flex items-center gap-2.5 text-[10px] font-mono tabular-nums text-white/90">
                    <button
                      type="button"
                      onClick={() => setIsPlaying((p) => !p)}
                      aria-label={isPlaying ? 'Pause video preview' : 'Play video preview'}
                      className="p-1 rounded hover:bg-white/15 cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5" aria-hidden="true" />
                      ) : (
                        <Play className="w-3.5 h-3.5" aria-hidden="true" />
                      )}
                    </button>
                    <span>04:18</span>
                    <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                      <div className="w-[42%] h-full bg-[#C8102E]" />
                    </div>
                    <span>11:05</span>
                    <Maximize2 className="w-3.5 h-3.5 text-white/80" aria-hidden="true" />
                  </div>
                </div>

                {/* Below-Video Area: Either Video Metadata OR Anchored Caption Quick-Sheet */}
                {activeScreen === CaptionMockupScreen.QuickSheet ? (
                  <div
                    role="region"
                    aria-label="Caption quick settings sheet"
                    className="bg-[#FFFFFF] text-[#141413] p-4 space-y-3.5 border-t border-[#E6E4DF]"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-[#141413]">
                          Caption Appearance &amp; Language
                        </h4>
                        <p className="text-[11px] text-[#73716C]">
                          Live preview updates video above without pausing
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveScreen(CaptionMockupScreen.ActiveCaptions)}
                        className="px-2.5 py-1 text-xs font-medium text-[#52514E] hover:text-[#141413] bg-[#F3F2EE] rounded-md cursor-pointer"
                      >
                        Done
                      </button>
                    </div>

                    {/* Track / Language Selector */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-medium text-[#52514E]">
                        Caption Track
                      </span>
                      <div className="grid grid-cols-3 gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            setCaptionsEnabled(true);
                            setLanguage('English');
                          }}
                          className={`px-2 py-1.5 text-[11px] font-medium rounded-lg border transition-colors whitespace-nowrap truncate cursor-pointer ${
                            captionsEnabled && language === 'English'
                              ? 'bg-[#141413] text-white border-[#141413]'
                              : 'bg-[#FAF9F6] text-[#141413] border-[#E6E4DF]'
                          }`}
                        >
                          English
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setCaptionsEnabled(true);
                            setLanguage('Hindi (Auto)');
                          }}
                          className={`px-2 py-1.5 text-[11px] font-medium rounded-lg border transition-colors whitespace-nowrap truncate cursor-pointer ${
                            captionsEnabled && language === 'Hindi (Auto)'
                              ? 'bg-[#141413] text-white border-[#141413]'
                              : 'bg-[#FAF9F6] text-[#141413] border-[#E6E4DF]'
                          }`}
                        >
                          Hindi (Auto)
                        </button>
                        <button
                          type="button"
                          onClick={() => setCaptionsEnabled(false)}
                          className={`px-2 py-1.5 text-[11px] font-medium rounded-lg border transition-colors whitespace-nowrap cursor-pointer ${
                            !captionsEnabled
                              ? 'bg-[#141413] text-white border-[#141413]'
                              : 'bg-[#FAF9F6] text-[#141413] border-[#E6E4DF]'
                          }`}
                        >
                          Off
                        </button>
                      </div>
                    </div>

                    {/* Text Size Selector */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-medium text-[#52514E]">
                        Text Size
                      </span>
                      <div className="grid grid-cols-3 gap-1.5">
                        {[
                          { id: 'sm', label: 'Small (14sp)' },
                          { id: 'md', label: 'Default (16sp)' },
                          { id: 'lg', label: 'Large (20sp)' },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFontScale(opt.id as 'sm' | 'md' | 'lg')}
                            className={`px-2 py-1.5 text-[11px] font-medium rounded-lg border transition-colors whitespace-nowrap cursor-pointer ${
                              fontScale === opt.id
                                ? 'bg-[#141413] text-white border-[#141413]'
                                : 'bg-[#FAF9F6] text-[#141413] border-[#E6E4DF]'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Window Contrast Preset */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-medium text-[#52514E]">
                        Background Contrast Window
                      </span>
                      <div className="grid grid-cols-1 gap-1.5">
                        {[
                          {
                            id: CaptionPresetStyle.StandardDarkWindow,
                            label: 'Dark Scrim 82% (15.4:1 AAA)',
                          },
                          {
                            id: CaptionPresetStyle.HighContrastYellow,
                            label: 'Yellow on Black (14.1:1 High Glare)',
                          },
                          {
                            id: CaptionPresetStyle.UnbackedBaseline,
                            label: 'No Window — Baseline Comparison (1.14:1 on glare)',
                          },
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => {
                              setCaptionsEnabled(true);
                              setPreset(item.id);
                            }}
                            className={`flex items-center justify-between px-3 py-1.5 text-[11px] font-medium rounded-lg border transition-colors cursor-pointer ${
                              preset === item.id
                                ? 'bg-[#FAF9F6] border-[#C8102E] text-[#141413]'
                                : 'bg-[#FFFFFF] border-[#E6E4DF] text-[#52514E] hover:text-[#141413]'
                            }`}
                          >
                            <span className="truncate">{item.label}</span>
                            {preset === item.id && (
                              <Check className="w-3.5 h-3.5 text-[#C8102E] shrink-0" aria-hidden="true" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#FFFFFF] text-[#141413] p-4 space-y-3">
                    <div>
                      <p className="text-xs font-bold leading-snug text-[#141413]">
                        Building a Handwired Mechanical Keyboard — Part 4: Diode Matrix
                      </p>
                      <p className="mt-1 text-[11px] text-[#73716C]">
                        OpenHardware Lab · 42K views · 3 weeks ago
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#E6E4DF] flex items-center justify-between text-[11px] text-[#52514E]">
                      <span>Tip: Tap “Customize” on video to test the Quick-Sheet</span>
                      <button
                        type="button"
                        onClick={() => setActiveScreen(CaptionMockupScreen.QuickSheet)}
                        className="font-medium text-[#C8102E] hover:underline whitespace-nowrap cursor-pointer"
                      >
                        Open Quick-Sheet →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Live Design & Accessibility Callouts */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 bg-[#FAF9F6] border border-[#E6E4DF] rounded-xl space-y-2.5">
                <p className="text-xs font-semibold text-[#141413]">
                  Why this interaction keeps context intact
                </p>
                <p className="text-xs text-[#52514E] leading-relaxed">
                  Instead of routing viewers through <span className="font-mono text-[#141413]">Settings → Captions → System Preferences</span>, toggling <span className="font-mono text-[#141413]">[CC]</span> surfaces a transient 4-second <span className="font-medium text-[#141413]">Customize</span> anchor while an adjacent <span className="font-mono text-[#141413]">48×48dp</span> options trigger supports keyboard and switch-access users at all times.
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F6] border border-[#E6E4DF] rounded-xl space-y-3">
                <p className="text-xs font-semibold text-[#141413]">
                  Checked Accessibility Properties
                </p>
                <dl className="space-y-2 text-xs">
                  <div className="flex items-baseline justify-between gap-2 border-b border-[#E6E4DF] pb-1.5">
                    <dt className="text-[#52514E]">Touch target hitbox</dt>
                    <dd className="font-mono tabular-nums font-medium text-[#141413]">48 × 48dp (8dp gap)</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-2 border-b border-[#E6E4DF] pb-1.5">
                    <dt className="text-[#52514E]">Active caption contrast</dt>
                    <dd className="font-mono tabular-nums font-medium text-[#141413]">{contrastInfo.ratio} ({contrastInfo.badge})</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-2 border-b border-[#E6E4DF] pb-1.5">
                    <dt className="text-[#52514E]">Non-color state cue</dt>
                    <dd className="font-mono text-[#141413]">2dp bar + aria-pressed</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <dt className="text-[#52514E]">Scrub bar collision</dt>
                    <dd className="font-mono tabular-nums text-[#141413]">+36dp bottom offset</dd>
                  </div>
                </dl>

                {mode === 'hero-preview' && (
                  <div className="pt-2 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setScene((prev) =>
                          prev === VideoSceneLuminance.MakerDesk
                            ? VideoSceneLuminance.BrightCourtyard
                            : VideoSceneLuminance.MakerDesk
                        )
                      }
                      className="px-3 py-1.5 text-xs font-medium bg-[#FFFFFF] border border-[#E6E4DF] rounded-lg text-[#141413] hover:border-[#141413]/40 transition-colors cursor-pointer"
                    >
                      Test {scene === VideoSceneLuminance.MakerDesk ? 'Sunlit Glare' : 'Mid-Tone'} Frame
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setPreset((prev) =>
                          prev === CaptionPresetStyle.StandardDarkWindow
                            ? CaptionPresetStyle.HighContrastYellow
                            : CaptionPresetStyle.StandardDarkWindow
                        )
                      }
                      className="px-3 py-1.5 text-xs font-medium bg-[#FFFFFF] border border-[#E6E4DF] rounded-lg text-[#141413] hover:border-[#141413]/40 transition-colors cursor-pointer"
                    >
                      Switch Contrast Preset
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Screen 3: Active, Inactive, Focus & Disabled Control Matrix */}
        {activeScreen === CaptionMockupScreen.ControlStates && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Inactive (Captions Off)',
                stateCue: 'Opacity 85% · No underline bar',
                a11yLabel: '"Captions off. Double tap to turn on."',
                visual: (
                  <div className="w-12 h-12 rounded-lg bg-[#1C1C1A] flex items-center justify-center">
                    <Subtitles className="w-5 h-5 text-white/80" />
                  </div>
                ),
              },
              {
                title: 'Active (Captions On)',
                stateCue: '100% White + 2dp #C8102E bar (Not color-only)',
                a11yLabel: '"Captions, English, on. Double tap to turn off."',
                visual: (
                  <div className="w-12 h-12 rounded-lg bg-[#1C1C1A] flex flex-col items-center justify-center">
                    <Subtitles className="w-5 h-5 text-white" />
                    <span className="mt-1 w-5 h-0.5 bg-[#C8102E] rounded-full" />
                  </div>
                ),
              },
              {
                title: 'Keyboard / Switch Focus',
                stateCue: '2dp outer ring (#FFFFFF + #C8102E)',
                a11yLabel: 'Exposes sibling "Caption Options" button in tab order',
                visual: (
                  <div className="w-12 h-12 rounded-lg bg-[#1C1C1A] ring-2 ring-[#C8102E] ring-offset-2 ring-offset-[#141413] flex flex-col items-center justify-center">
                    <Subtitles className="w-5 h-5 text-white" />
                    <span className="mt-1 w-5 h-0.5 bg-[#C8102E] rounded-full" />
                  </div>
                ),
              },
              {
                title: 'Unavailable Stream',
                stateCue: '45% Muted + Slash indicator · Tap explains why',
                a11yLabel: '"Captions unavailable for this live stream."',
                visual: (
                  <div className="w-12 h-12 rounded-lg bg-[#1C1C1A] flex flex-col items-center justify-center opacity-60">
                    <Subtitles className="w-5 h-5 text-white/50" />
                    <span className="text-[9px] font-mono text-white/70 mt-0.5">N/A</span>
                  </div>
                ),
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-4 bg-[#FAF9F6] border border-[#E6E4DF] rounded-xl flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  {card.visual}
                  <span className="font-mono text-[11px] text-[#73716C] tabular-nums">48×48dp</span>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-semibold text-[#141413]">{card.title}</h4>
                  <p className="text-xs text-[#52514E]">{card.stateCue}</p>
                  <p className="pt-1 font-mono text-[11px] text-[#73716C] leading-relaxed">
                    ARIA: {card.a11yLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Screen 4: Relevant Loading, Error, and Unavailable Edge States */}
        {activeScreen === CaptionMockupScreen.EdgeStates && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'loading', label: 'Track Fetching (Buffering)' },
                { id: 'error', label: 'Network Track Failure + Retry' },
                { id: 'unavailable', label: 'No Captions Provided' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setEdgeMode(item.id as 'loading' | 'error' | 'unavailable')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                    edgeMode === item.id
                      ? 'bg-[#141413] text-white border-[#141413]'
                      : 'bg-[#FAF9F6] text-[#52514E] border-[#E6E4DF] hover:text-[#141413]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="max-w-xl mx-auto rounded-2xl border border-[#141413] bg-[#141413] text-white p-5 space-y-4">
              <div className="flex items-center justify-between text-xs text-white/70 font-mono">
                <span>Edge State Simulation · Non-Blocking Player Banner</span>
                <Volume2 className="w-4 h-4" aria-hidden="true" />
              </div>

              {edgeMode === 'loading' && (
                <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex items-center gap-3">
                  <Loader2 className="w-4 h-4 text-white animate-spin shrink-0" aria-hidden="true" />
                  <div className="space-y-0.5">
                    <p className="text-xs font-medium text-white">Loading English captions…</p>
                    <p className="text-[11px] text-white/70">
                      Video playback continues uninterrupted while the WebVTT track synchronizes.
                    </p>
                  </div>
                </div>
              )}

              {edgeMode === 'error' && (
                <div className="p-4 rounded-xl bg-[#2A1215] border border-[#F87171]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-[#FCA5A5] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="space-y-0.5">
                      <p className="text-xs font-medium text-white">
                        Couldn’t load English captions (Connection timeout)
                      </p>
                      <p className="text-[11px] text-white/75">
                        Inline status avoids modal interruption; announces politely via aria-live.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setEdgeMode('loading')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#141413] text-xs font-medium hover:bg-white/90 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Retry Track</span>
                  </button>
                </div>
              )}

              {edgeMode === 'unavailable' && (
                <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex items-start gap-3">
                  <Settings className="w-4 h-4 text-white/80 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-white">
                      Captions aren’t available for this video yet
                    </p>
                    <p className="text-[11px] text-white/75">
                      Instead of hiding the [CC] icon completely—which makes users hunt through menus wondering where captions went—the control remains in its predictable slot with an explicit unavailable reason when tapped.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
