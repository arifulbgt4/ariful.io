import type { ReactNode, SVGProps } from 'react';

export type InterfaceIconName =
  | 'github'
  | 'linkedin'
  | 'privacy'
  | 'site-map'
  | 'rss'
  | 'launch'
  | 'layers'
  | 'verified'
  | 'worldwide';

const iconContent: Record<InterfaceIconName, ReactNode> = {
  github: (
    <>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.28-.37 6.72-1.61 6.72-7A5.44 5.44 0 0 0 19.27 4 5.07 5.07 0 0 0 19.13 1S18 0.63 15 2.3a13.38 13.38 0 0 0-6 0C6 0.63 4.87 1 4.87 1A5.07 5.07 0 0 0 4.73 4a5.44 5.44 0 0 0-1.45 3.5c0 5.42 3.44 6.66 6.72 7A4.8 4.8 0 0 0 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </>
  ),
  linkedin: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 11v5" />
      <path d="M8 8h.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 0 0-4 0" />
    </>
  ),
  privacy: (
    <>
      <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  'site-map': (
    <>
      <rect width="6" height="4" x="9" y="3" rx="1" />
      <rect width="6" height="4" x="3" y="17" rx="1" />
      <rect width="6" height="4" x="15" y="17" rx="1" />
      <path d="M12 7v4" />
      <path d="M6 17v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    </>
  ),
  rss: (
    <>
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </>
  ),
  launch: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.87 12.87 0 0 1 22 2c0 2.72-.78 7.5-6.05 11a22.35 22.35 0 0 1-3.95 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      <circle cx="16" cy="8" r="1" />
    </>
  ),
  layers: (
    <>
      <path d="m12 2 9 5-9 5-9-5 9-5z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </>
  ),
  verified: (
    <>
      <path d="M12 3 14.4 5l3.1-.2.7 3 2.6 1.7-1.2 2.9 1.2 2.9-2.6 1.7-.7 3-3.1-.2L12 22l-2.4-2.2-3.1.2-.7-3-2.6-1.7 1.2-2.9-1.2-2.9L5.8 7l.7-3 3.1.2L12 3z" />
      <path d="m8.5 12.5 2.2 2.2 4.8-5" />
    </>
  ),
  worldwide: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 0 20" />
      <path d="M12 2a15.3 15.3 0 0 0 0 20" />
    </>
  ),
};

type InterfaceIconProps = Omit<SVGProps<SVGSVGElement>, 'children'> & {
  name: InterfaceIconName;
};

export default function InterfaceIcon({ name, className = 'h-5 w-5', ...props }: InterfaceIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      {iconContent[name]}
    </svg>
  );
}
