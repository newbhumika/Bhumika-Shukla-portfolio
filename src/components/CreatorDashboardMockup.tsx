import React, { useState } from 'react';
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  Monitor,
  RefreshCw,
  Smartphone,
  Table,
  Upload,
} from 'lucide-react';
import { DashboardDataState } from '../types/portfolio';

interface CreatorDashboardMockupProps {
  compactPreview?: boolean;
}

const SYNTHETIC_VIDEOS = [
  {
    title: '04. Matrix Diode Wiring & Soldering Mistakes',
    published: '4 days ago',
    views: '18,420',
    typicalRange: '11.2k – 15.0k',
    avgWatched: '64.2%',
    captionShare: '38.4%',
    trend: 'above' as const,
  },
  {
    title: '03. Choosing Tactile vs Linear Switches for Coding',
    published: '2 weeks ago',
    views: '13,105',
    typicalRange: '11.2k – 15.0k',
    avgWatched: '58.7%',
    captionShare: '34.1%',
    trend: 'within' as const,
  },
  {
    title: '02. Designing a Reversible PCB in KiCad 8',
    published: '1 month ago',
    views: '9,480',
    typicalRange: '11.2k – 15.0k',
    avgWatched: '49.1%',
    captionShare: '41.0%',
    trend: 'below' as const,
  },
];

const RETENTION_SEGMENTS = [
  { timestamp: '00:00 – 00:45', stage: 'Hook & Finished Board Demo', retention: 92 },
  { timestamp: '00:45 – 02:30', stage: 'Schematic Overview (Drop-off noted)', retention: 68 },
  { timestamp: '02:30 – 06:15', stage: 'Close-Up Soldering Walkthrough', retention: 64 },
  { timestamp: '06:15 – 09:40', stage: 'Multimeter Continuity Check', retention: 57 },
  { timestamp: '09:40 – 11:05', stage: 'Final Typing Test & Wrap-Up', retention: 48 },
];

export const CreatorDashboardMockup: React.FC<CreatorDashboardMockupProps> = ({
  compactPreview = false,
}) => {
  const [dataState, setDataState] = useState<DashboardDataState>(
    DashboardDataState.Populated
  );
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [showAccessibleTable, setShowAccessibleTable] = useState<boolean>(false);
  const [timeframe, setTimeframe] = useState<'7d' | '28d'>('28d');

  if (compactPreview) {
    return (
      <div className="bg-[#FAF9F6] border border-[#E6E4DF] rounded-xl p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between text-xs text-[#73716C] pb-3 border-b border-[#E6E4DF]">
          <span className="font-semibold text-[#141413]">
            Creator Studio Concept · Baseline-Contextualized Overview
          </span>
          <span className="font-mono">Synthetic Channel Data</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              label: 'Latest Upload Views (96h)',
              value: '18,420',
              context: '↑ +22% above your 28d median (15.0k)',
            },
            {
              label: 'Average Percentage Viewed',
              value: '64.2%',
              context: '↑ +5.5 pts vs. channel typical',
            },
            {
              label: 'Captioned Watch Sessions',
              value: '38.4%',
              context: 'English & Hindi tracks active',
            },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="p-3.5 bg-[#FFFFFF] border border-[#E6E4DF] rounded-lg space-y-1"
            >
              <p className="text-[11px] text-[#73716C]">{kpi.label}</p>
              <p className="text-xl font-bold font-mono tabular-nums text-[#141413]">
                {kpi.value}
              </p>
              <p className="text-[11px] text-[#52514E]">{kpi.context}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Interactive State & Viewport Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 p-3 bg-[#F3F2EE] border border-[#E6E4DF] rounded-xl">
        <div
          role="tablist"
          aria-label="Dashboard UI data states"
          className="flex flex-wrap items-center gap-1"
        >
          {[
            { id: DashboardDataState.Populated, label: 'Populated State' },
            { id: DashboardDataState.Loading, label: 'Loading (Skeleton)' },
            { id: DashboardDataState.Empty, label: 'Empty (New Creator)' },
            { id: DashboardDataState.Error, label: 'Sync Error + Retry' },
          ].map((tab) => (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={dataState === tab.id}
              onClick={() => setDataState(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                dataState === tab.id
                  ? 'bg-[#FFFFFF] text-[#141413] border border-[#E6E4DF]'
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
              onClick={() => setViewportMode('desktop')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                viewportMode === 'desktop'
                  ? 'bg-[#141413] text-white'
                  : 'text-[#52514E] hover:text-[#141413]'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Desktop</span>
            </button>
            <button
              type="button"
              onClick={() => setViewportMode('mobile')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                viewportMode === 'mobile'
                  ? 'bg-[#141413] text-white'
                  : 'text-[#52514E] hover:text-[#141413]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Mobile (375px)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Canvas */}
      <div
        className={`mx-auto bg-[#FFFFFF] border border-[#E6E4DF] rounded-2xl p-5 sm:p-6 transition-opacity duration-150 ${
          viewportMode === 'mobile' ? 'max-w-[390px]' : 'w-full'
        }`}
      >
        {/* Workspace Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#E6E4DF]">
          <div>
            <p className="text-[11px] text-[#73716C]">
              Channel Performance · Synthetic Concept Dataset
            </p>
            <h3 className="text-base font-bold text-[#141413]">
              OpenHardware Lab — Analytics Summary
            </h3>
          </div>

          <div className="flex items-center gap-1 bg-[#FAF9F6] p-1 rounded-lg border border-[#E6E4DF]">
            <button
              type="button"
              onClick={() => setTimeframe('7d')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                timeframe === '7d'
                  ? 'bg-[#FFFFFF] text-[#141413] border border-[#E6E4DF]'
                  : 'text-[#52514E]'
              }`}
            >
              Last 7 days
            </button>
            <button
              type="button"
              onClick={() => setTimeframe('28d')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                timeframe === '28d'
                  ? 'bg-[#FFFFFF] text-[#141413] border border-[#E6E4DF]'
                  : 'text-[#52514E]'
              }`}
            >
              Last 28 days
            </button>
          </div>
        </div>

        {/* STATE 1: POPULATED */}
        {dataState === DashboardDataState.Populated && (
          <div className="space-y-6">
            {/* Tier 1: Executive Summary Cards with Typical Baseline Ranges */}
            <div
              className={`grid gap-4 ${
                viewportMode === 'mobile' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'
              }`}
            >
              <div className="p-4 bg-[#FAF9F6] border border-[#E6E4DF] rounded-xl space-y-1.5">
                <p className="text-xs font-medium text-[#52514E]">
                  Views ({timeframe === '28d' ? '28-day total' : '7-day total'})
                </p>
                <p className="text-2xl font-bold font-mono tabular-nums text-[#141413]">
                  {timeframe === '28d' ? '41,005' : '18,420'}
                </p>
                <p className="inline-flex items-center gap-1 text-xs text-[#141413]">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#141413] shrink-0" aria-hidden="true" />
                  <span>
                    {timeframe === '28d'
                      ? '+14.2% above typical (33k–37k)'
                      : '+22.8% above 7d median'}
                  </span>
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F6] border border-[#E6E4DF] rounded-xl space-y-1.5">
                <p className="text-xs font-medium text-[#52514E]">
                  Avg. Percentage Viewed
                </p>
                <p className="text-2xl font-bold font-mono tabular-nums text-[#141413]">
                  {timeframe === '28d' ? '59.4%' : '64.2%'}
                </p>
                <p className="inline-flex items-center gap-1 text-xs text-[#52514E]">
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>Typical channel range: 52% – 58%</span>
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F6] border border-[#E6E4DF] rounded-xl space-y-1.5">
                <p className="text-xs font-medium text-[#52514E]">
                  Returning Viewers Share
                </p>
                <p className="text-2xl font-bold font-mono tabular-nums text-[#141413]">
                  {timeframe === '28d' ? '44.1%' : '47.8%'}
                </p>
                <p className="inline-flex items-center gap-1 text-xs text-[#52514E]">
                  <ArrowDownRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>-2.1 pts vs. previous period (more new search traffic)</span>
                </p>
              </div>
            </div>

            {/* Tier 2: Key Retention Diagnostic with Accessible Table Fallback */}
            <div className="p-4 sm:p-5 bg-[#FAF9F6] border border-[#E6E4DF] rounded-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-[#141413]">
                    Latest Video Retention Diagnostic — “04. Matrix Diode Wiring”
                  </h4>
                  <p className="text-xs text-[#52514E]">
                    Highlights exact chapter timestamps where viewers stay or skip ahead
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAccessibleTable((prev) => !prev)}
                  aria-pressed={showAccessibleTable}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#FFFFFF] border border-[#E6E4DF] rounded-lg text-[#141413] hover:border-[#141413]/40 transition-colors cursor-pointer"
                >
                  <Table className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{showAccessibleTable ? 'Show Visual Bars' : 'View as Accessible Data Table'}</span>
                </button>
              </div>

              {!showAccessibleTable ? (
                <div className="space-y-3">
                  {RETENTION_SEGMENTS.map((seg) => (
                    <div key={seg.timestamp} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#141413] font-medium">
                          <span className="font-mono text-[#73716C] mr-2">{seg.timestamp}</span>
                          {seg.stage}
                        </span>
                        <span className="font-mono tabular-nums font-semibold text-[#141413]">
                          {seg.retention}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-[#E6E4DF] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            seg.timestamp.includes('00:45') ? 'bg-[#C8102E]' : 'bg-[#141413]'
                          }`}
                          style={{ width: `${seg.retention}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <p className="text-xs text-[#52514E] pt-1">
                    Diagnostic takeaway: Steepest drop (-24 pts) occurs during the static 00:45 schematic slide before soldering begins.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-[#E6E4DF] text-[#73716C]">
                        <th className="py-2 pr-4 font-medium">Timestamp</th>
                        <th className="py-2 pr-4 font-medium">Chapter Segment</th>
                        <th className="py-2 text-right font-medium">Viewers Remaining</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6E4DF]">
                      {RETENTION_SEGMENTS.map((seg) => (
                        <tr key={seg.timestamp}>
                          <td className="py-2 pr-4 font-mono tabular-nums text-[#52514E]">
                            {seg.timestamp}
                          </td>
                          <td className="py-2 pr-4 text-[#141413]">{seg.stage}</td>
                          <td className="py-2 text-right font-mono tabular-nums font-medium text-[#141413]">
                            {seg.retention}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Tier 3: Recent Uploads Baseline Comparison */}
            {viewportMode === 'desktop' ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[#E6E4DF] text-[#73716C]">
                      <th className="py-2.5 pr-4 font-medium">Recent Upload</th>
                      <th className="py-2.5 pr-4 text-right font-medium">Views</th>
                      <th className="py-2.5 pr-4 text-right font-medium">Typical 28d Range</th>
                      <th className="py-2.5 pr-4 text-right font-medium">Avg. Watched</th>
                      <th className="py-2.5 text-right font-medium">Baseline Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E6E4DF]">
                    {SYNTHETIC_VIDEOS.map((vid) => (
                      <tr key={vid.title} className="hover:bg-[#FAF9F6]">
                        <td className="py-3 pr-4">
                          <p className="font-medium text-[#141413]">{vid.title}</p>
                          <p className="text-[11px] text-[#73716C]">Published {vid.published}</p>
                        </td>
                        <td className="py-3 pr-4 text-right font-mono tabular-nums font-medium text-[#141413]">
                          {vid.views}
                        </td>
                        <td className="py-3 pr-4 text-right font-mono tabular-nums text-[#52514E]">
                          {vid.typicalRange}
                        </td>
                        <td className="py-3 pr-4 text-right font-mono tabular-nums text-[#141413]">
                          {vid.avgWatched}
                        </td>
                        <td className="py-3 text-right text-[#141413]">
                          {vid.trend === 'above' && '↑ Above typical'}
                          {vid.trend === 'within' && 'Within typical'}
                          {vid.trend === 'below' && '↓ Below typical'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-[#141413]">Recent Uploads (Stacked Mobile Cards)</p>
                {SYNTHETIC_VIDEOS.map((vid) => (
                  <div
                    key={vid.title}
                    className="p-3 bg-[#FAF9F6] border border-[#E6E4DF] rounded-xl space-y-1.5 text-xs"
                  >
                    <p className="font-semibold text-[#141413]">{vid.title}</p>
                    <div className="flex items-center justify-between font-mono tabular-nums text-[#52514E]">
                      <span>{vid.views} views</span>
                      <span>{vid.avgWatched} watched</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* STATE 2: LOADING SKELETON */}
        {dataState === DashboardDataState.Loading && (
          <div role="status" aria-live="polite" className="space-y-5 py-2">
            <p className="text-xs text-[#73716C]">
              Loading channel baseline metrics… (Geometry-matched skeleton prevents layout shift)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="p-4 bg-[#FAF9F6] border border-[#E6E4DF] rounded-xl space-y-3"
                >
                  <div className="h-3 w-28 bg-[#E6E4DF] rounded" />
                  <div className="h-7 w-20 bg-[#E6E4DF] rounded" />
                  <div className="h-3 w-40 bg-[#E6E4DF] rounded" />
                </div>
              ))}
            </div>
            <div className="p-5 bg-[#FAF9F6] border border-[#E6E4DF] rounded-xl space-y-3">
              <div className="h-4 w-56 bg-[#E6E4DF] rounded" />
              <div className="h-24 w-full bg-[#E6E4DF]/70 rounded" />
            </div>
          </div>
        )}

        {/* STATE 3: EMPTY STATE */}
        {dataState === DashboardDataState.Empty && (
          <div className="py-12 px-4 text-center max-w-md mx-auto space-y-4">
            <div className="w-11 h-11 mx-auto rounded-xl bg-[#FAF9F6] border border-[#E6E4DF] flex items-center justify-center text-[#52514E]">
              <Upload className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-base font-bold text-[#141413]">
                No published video metrics yet
              </h4>
              <p className="text-xs text-[#52514E] leading-relaxed">
                Once your first public video is published, retention segments and 28-day typical ranges will appear here within 3–4 hours—replacing confusing “0% (-100%)” red warning arrows on brand-new channels.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setDataState(DashboardDataState.Populated)}
              className="px-4 py-2 text-xs font-medium text-white bg-[#141413] rounded-lg hover:bg-[#C8102E] transition-colors cursor-pointer"
            >
              Preview Sample Populated Channel
            </button>
          </div>
        )}

        {/* STATE 4: ERROR STATE */}
        {dataState === DashboardDataState.Error && (
          <div
            role="alert"
            className="p-6 bg-[#FAF9F6] border border-[#E6E4DF] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C8102E] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#141413]">
                  Retention reporting is temporarily delayed
                </h4>
                <p className="text-xs text-[#52514E] leading-relaxed max-w-lg">
                  Last synced 6 hours ago. Your published videos and public view counts are unaffected while hourly retention buckets catch up.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setDataState(DashboardDataState.Populated)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#141413] rounded-lg hover:bg-[#C8102E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Retry Sync</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
