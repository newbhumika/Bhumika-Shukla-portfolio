export enum AppRoute {
  Home = 'home',
  CaptionCaseStudy = 'caption-controls',
  DashboardCaseStudy = 'creator-dashboard',
  Resume = 'resume',
}

export enum CaptionMockupScreen {
  ActiveCaptions = 'active-captions',
  QuickSheet = 'quick-sheet',
  ControlStates = 'control-states',
  EdgeStates = 'edge-states',
}

export enum VideoSceneLuminance {
  MakerDesk = 'maker-desk',
  BrightCourtyard = 'bright-courtyard',
}

export enum CaptionPresetStyle {
  StandardDarkWindow = 'standard-dark',
  HighContrastYellow = 'high-contrast-yellow',
  UnbackedBaseline = 'unbacked-baseline',
}

export enum DashboardDataState {
  Populated = 'populated',
  Loading = 'loading',
  Empty = 'empty',
  Error = 'error',
}

export interface ContrastAuditItem {
  element: string;
  foreground: string;
  background: string;
  measuredRatio: string;
  wcagTarget: string;
  status: 'Checked — Passes AAA' | 'Checked — Passes AA' | 'Baseline Failure Reference';
  notes: string;
}

export interface SkillGroup {
  category: string;
  appliedItems: string[];
  learningItems?: string[];
  note?: string;
}
