'use client';

import Link from 'next/link';
import { track } from '@vercel/analytics';
import type { ReactNode } from 'react';

type HireIntent = 'consultation' | 'project-brief';

type TrackedHireLinkProps = {
  children: ReactNode;
  className?: string;
  href: `/hire#${HireIntent}`;
  intent: HireIntent;
  source: string;
};

export default function TrackedHireLink({
  children,
  className,
  href,
  intent,
  source,
}: TrackedHireLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        track('service_to_hire_cta_click', {
          source,
          intent,
        })
      }
    >
      {children}
    </Link>
  );
}
