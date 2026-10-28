import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, FileText } from 'lucide-react';
import { AppRoute } from '../types/portfolio';
import { PROFILE_INFO, RESUME_PDF_PATH } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (route: AppRoute, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer id="contact" className="border-t border-[#E6E4DF] bg-[#FFFFFF] no-print">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-medium text-[#73716C]">
              Resume &amp; Contact
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413] max-w-xl">
              Let’s talk about accessible product design, interaction details, and engineering collaboration.
            </h2>
            <p className="text-sm sm:text-base text-[#52514E] max-w-xl leading-relaxed">
              Happy to walk through Figma files, usability findings, accessibility annotations, or component handoff specs in detail.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={RESUME_PDF_PATH}
                download="Bhumika_Shukla_UX_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#C8102E] rounded-lg hover:bg-[#A50D26] transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px]"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                type="button"
                onClick={() => onNavigate(AppRoute.Resume)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#141413] bg-[#FAF9F6] border border-[#E6E4DF] rounded-lg hover:border-[#141413]/40 transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] cursor-pointer"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>View Resume</span>
              </button>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-[#52514E] bg-[#FAF9F6] border border-[#E6E4DF] rounded-lg hover:text-[#141413] hover:border-[#141413]/40 transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#141413]" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{PROFILE_INFO.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-1">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-[#141413]">Direct Links</h3>
              <ul className="space-y-2.5 text-sm text-[#52514E]">
                <li>
                  <a
                    href={PROFILE_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#C8102E] underline-offset-4 hover:underline transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={PROFILE_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#C8102E] underline-offset-4 hover:underline transition-colors"
                  >
                    <span>GitHub (@newbhumika)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${PROFILE_INFO.email}`}
                    className="inline-flex items-center gap-1 hover:text-[#C8102E] underline-offset-4 hover:underline transition-colors"
                  >
                    <span>{PROFILE_INFO.email}</span>
                  </a>
                </li>
                <li className="text-xs text-[#73716C]">
                  {PROFILE_INFO.location}
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-[#141413]">Portfolio Index</h3>
              <ul className="space-y-2.5 text-sm text-[#52514E]">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate(AppRoute.CaptionCaseStudy)}
                    className="text-left hover:text-[#141413] underline-offset-4 hover:underline transition-colors cursor-pointer"
                  >
                    01. Caption Controls Case Study
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate(AppRoute.DashboardCaseStudy)}
                    className="text-left hover:text-[#141413] underline-offset-4 hover:underline transition-colors cursor-pointer"
                  >
                    02. Creator Analytics Study
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate(AppRoute.Resume)}
                    className="text-left hover:text-[#141413] underline-offset-4 hover:underline transition-colors cursor-pointer"
                  >
                    03. Resume (PDF &amp; Text)
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#E6E4DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#73716C]">
          <p>
            Designed &amp; built by Bhumika Shukla
          </p>
          <p>
            UX &amp; Interaction Design Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};
