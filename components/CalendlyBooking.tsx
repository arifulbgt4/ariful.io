'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { track } from '@vercel/analytics';

type CalendlyBookingProps = {
  eventUrl: string;
  buttonLabel: string;
  iframeTitle: string;
};

export default function CalendlyBooking({
  eventUrl,
  buttonLabel,
  iframeTitle,
}: CalendlyBookingProps) {
  const statusId = useId();
  const statusRef = useRef<HTMLParagraphElement>(null);
  const [shouldLoadCalendar, setShouldLoadCalendar] = useState(false);
  const [hasCalendarLoaded, setHasCalendarLoaded] = useState(false);

  function loadCalendar() {
    track('consultation_scheduler_load');
    setShouldLoadCalendar(true);
  }

  useEffect(() => {
    if (shouldLoadCalendar) statusRef.current?.focus();
  }, [shouldLoadCalendar]);

  return (
    <div className="space-y-5">
      {!shouldLoadCalendar ? (
        <div className="surface-card p-6 sm:p-8">
          <p id={statusId} className="text-sm leading-6 text-slate-400">
            The booking calendar will connect to Calendly only after you choose to load it.
          </p>
          <button
            type="button"
            className="button-primary mt-5"
            aria-describedby={statusId}
            onClick={loadCalendar}
          >
            {buttonLabel}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      ) : (
        <div>
          <p
            id={statusId}
            ref={statusRef}
            role="status"
            aria-live="polite"
            tabIndex={-1}
            className="mb-4 text-sm leading-6 text-slate-400"
          >
            {hasCalendarLoaded
              ? 'The Calendly booking frame has loaded. Availability is provided by Calendly; use the external link below if the event does not display.'
              : 'Loading the Calendly booking calendar…'}
          </p>
          <div className="-mx-5 overflow-x-auto border-y border-white/[0.07] bg-white sm:mx-0 sm:rounded-2xl sm:border">
            <iframe
              src={eventUrl}
              title={iframeTitle}
              aria-describedby={statusId}
              className="block h-[880px] w-full min-w-[320px] border-0 sm:h-[820px] lg:h-[760px]"
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setHasCalendarLoaded(true)}
            />
          </div>
        </div>
      )}

      <a
        href={eventUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="button-secondary"
        onClick={() => track('calendly_external_fallback_click')}
      >
        Open Calendly in a new tab
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
