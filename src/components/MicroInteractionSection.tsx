import React, { useEffect, useRef, useState } from 'react';
import { Layers, Pause, Play, RotateCcw } from 'lucide-react';

interface TransitionStage {
  id: number;
  name: string;
  seekSeconds: number;
  trigger: string;
  duration: string;
  easing: string;
  reducedMotionBehavior: string;
  visualSummary: string;
  ariaAnnouncement: string;
}

const STAGES: TransitionStage[] = [
  {
    id: 1,
    name: '01. Playback Idle (Controls Hidden)',
    seekSeconds: 0.6,
    trigger: 'Single tap anywhere on 16:9 player surface',
    duration: '150ms',
    easing: 'cubic-bezier(0.2, 0, 0, 1)',
    reducedMotionBehavior: '100ms opacity fade (no vertical shift)',
    visualSummary:
      'Top chrome scrim (0% → 65% alpha) reveals the 48×48dp [CC] button and adjacent Caption Options icon.',
    ariaAnnouncement: '"Video controls visible. Captions off."',
  },
  {
    id: 2,
    name: '02. Toggle Captions On + Contextual Anchor',
    seekSeconds: 2.6,
    trigger: 'Tap [CC] button (48×48dp target)',
    duration: '180ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    reducedMotionBehavior: 'Instant underline indicator + opacity-only pill appearance',
    visualSummary:
      '2dp crimson bar (#C8102E) anchors beneath [CC]; transient "English · Customize" pill appears below top bar for 4 seconds.',
    ariaAnnouncement: '"Captions on, English. Customize button available."',
  },
  {
    id: 3,
    name: '03. Open Anchored Quick-Sheet',
    seekSeconds: 5.4,
    trigger: 'Tap "Customize" pill, tap Options icon, or long-press [CC] (400ms)',
    duration: '200ms',
    easing: 'cubic-bezier(0.2, 0, 0, 1)',
    reducedMotionBehavior: '120ms crossfade into anchored sheet; zero spring or slide translation',
    visualSummary:
      'Half-height sheet docks cleanly below the 16:9 video frame so live playback and active captions stay 100% unobstructed.',
    ariaAnnouncement: '"Caption appearance and language sheet opened."',
  },
  {
    id: 4,
    name: '04. Real-Time Style Preview & Dismiss',
    seekSeconds: 8.9,
    trigger: 'Tap Font Size (20sp) or High-Contrast preset, then tap "Done"',
    duration: '120ms',
    easing: 'linear opacity / transform scale',
    reducedMotionBehavior: 'Immediate text style update without layout bounce',
    visualSummary:
      'Caption container updates in place over the live video frame; preferences persist locally across subsequent videos.',
    ariaAnnouncement: '"Caption text size set to Large, 20sp."',
  },
];

const WALKTHROUGH_VIDEO_PATH = '/assets/caption_prototype_walkthrough.mp4';

export const MicroInteractionSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [selectedStage, setSelectedStage] = useState<number>(2);
  const [reducedMotionPreview, setReducedMotionPreview] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotionPreview(true);
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, []);

  const handleStageSelect = (stage: TransitionStage) => {
    setSelectedStage(stage.id);
    if (videoRef.current) {
      videoRef.current.currentTime = stage.seekSeconds;
    }
  };

  const handleTimeUpdate = () => {
    const vid = videoRef.current;
    if (!vid) return;
    const t = vid.currentTime;
    if (t < 2.2) {
      setSelectedStage(1);
    } else if (t < 4.9) {
      setSelectedStage(2);
    } else if (t < 7.2) {
      setSelectedStage(3);
    } else {
      setSelectedStage(4);
    }
  };

  const togglePlayback = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().catch(() => {});
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const replayFlow = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.currentTime = 0;
    vid.play().catch(() => {});
    setIsPlaying(true);
    setSelectedStage(1);
  };

  const handleReducedMotionToggle = () => {
    setReducedMotionPreview((prev) => {
      const next = !prev;
      if (videoRef.current) {
        if (next) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          videoRef.current.play().catch(() => {});
          setIsPlaying(true);
        }
      }
      return next;
    });
  };

  const activeStage = STAGES.find((s) => s.id === selectedStage) || STAGES[0];

  return (
    <section
      aria-labelledby="micro-interaction-heading"
      className="border-t border-[#E6E4DF] py-16 sm:py-20"
    >
      <div className="space-y-3 max-w-3xl mb-10">
        <p className="text-xs font-medium text-[#73716C]">
          Micro-Interaction Prototype · State &amp; Transition Architecture
        </p>
        <h2
          id="micro-interaction-heading"
          className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]"
        >
          Turning captions on and customizing legibility without losing playback context
        </h2>
        <p className="text-sm sm:text-base text-[#52514E] leading-relaxed">
          A 12-second prototype walkthrough of the core interaction flow (<span className="font-mono text-[#141413]">CC Toggle → Contextual Customize Pill → Docked Quick-Sheet</span>), synchronized with the documented state machine on the right.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: 12-Second Prototype Walkthrough Video */}
        <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-[#73716C]">
              <span className="font-semibold text-[#141413]">
                Prototype Flow Recording
              </span>
              <span className="font-mono tabular-nums">00:12 · 30fps MP4</span>
            </div>

            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-[#E6E4DF] bg-[#F3F2EE]">
              <video
                ref={videoRef}
                src={WALKTHROUGH_VIDEO_PATH}
                autoPlay
                loop
                muted
                playsInline
                controls
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                aria-label="12-second walkthrough showing mobile caption toggle, contextual customize pill, docked quick-sheet, and live high-contrast preview"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-[#E6E4DF] flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlayback}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#141413] bg-[#FAF9F6] border border-[#E6E4DF] rounded-lg hover:border-[#141413]/40 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Play</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={replayFlow}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#52514E] bg-[#FAF9F6] border border-[#E6E4DF] rounded-lg hover:text-[#141413] hover:border-[#141413]/40 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Replay from 00:00</span>
              </button>
            </div>

            <span className="text-[11px] text-[#73716C]">
              Click any stage card to scrub
            </span>
          </div>
        </div>

        {/* Right: Synchronized State & Transition Stepper */}
        <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E6E4DF] rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C8102E]" aria-hidden="true" />
                <h3 className="text-sm font-bold text-[#141413]">
                  Documented State Machine &amp; Transition Timing
                </h3>
              </div>

              <button
                type="button"
                onClick={handleReducedMotionToggle}
                aria-pressed={reducedMotionPreview}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  reducedMotionPreview
                    ? 'bg-[#141413] text-white border-[#141413]'
                    : 'bg-[#FAF9F6] text-[#52514E] border-[#E6E4DF] hover:text-[#141413]'
                }`}
              >
                {reducedMotionPreview
                  ? 'Mode: prefers-reduced-motion: reduce'
                  : 'Mode: Standard Motion'}
              </button>
            </div>

            {/* 4-Stage Selector (Synced with Video Playback) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {STAGES.map((stage) => (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => handleStageSelect(stage)}
                  className={`text-left p-3 rounded-xl border transition-colors duration-150 cursor-pointer ${
                    selectedStage === stage.id
                      ? 'bg-[#FAF9F6] border-[#C8102E] text-[#141413]'
                      : 'bg-[#FFFFFF] border-[#E6E4DF] text-[#52514E] hover:border-[#141413]/30 hover:text-[#141413]'
                  }`}
                >
                  <p className="text-xs font-semibold text-[#141413]">{stage.name}</p>
                  <p className="mt-1 text-[11px] text-[#73716C] truncate">{stage.trigger}</p>
                </button>
              ))}
            </div>

            {/* Active Stage Spec Sheet */}
            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E6E4DF] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#E6E4DF]">
                <span className="text-xs font-bold text-[#141413]">{activeStage.name}</span>
                <span className="font-mono text-xs tabular-nums text-[#C8102E]">
                  {reducedMotionPreview
                    ? activeStage.reducedMotionBehavior
                    : `${activeStage.duration} · ${activeStage.easing}`}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <p className="font-semibold text-[#141413]">User Trigger</p>
                  <p className="text-[#52514E] leading-relaxed">{activeStage.trigger}</p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-[#141413]">Visual State Change</p>
                  <p className="text-[#52514E] leading-relaxed">{activeStage.visualSummary}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E6E4DF] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <span className="text-[#52514E]">Screen-Reader Live Output:</span>
                <code className="font-mono text-[11px] text-[#141413] bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#E6E4DF]">
                  {activeStage.ariaAnnouncement}
                </code>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#73716C]">
            Compositor discipline: Only <span className="font-mono text-[#52514E]">opacity</span> and <span className="font-mono text-[#52514E]">transform</span> animate (all durations ≤ 200ms) to avoid layout thrashing on mobile devices.
          </p>
        </div>
      </div>
    </section>
  );
};
