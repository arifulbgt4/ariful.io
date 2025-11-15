"use client";
export * from "./Types";

// React
import { FC } from "react";

// Types
import { JobDetailsOptions } from "./Types";

const JobDetails: FC<JobDetailsOptions> = ({ data }) => {
  const { title, company, address, works, url, startDate, endDate } = data;
  return (
    <div className="mb-8 rounded-lg border bg-card text-card-foreground shadow-lg">
      {/* Card Header */}
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              {title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {company} - {address}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {startDate} - {endDate}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content - Timeline */}
      <div className="p-6 pt-0">
        <div className="space-y-6">
          {works?.map((work, i) => (
            <div key={i} className="flex gap-4">
              {/* Timeline Dot and Connector */}
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full border-2 border-primary bg-background"></div>
                {works.length - 1 > i && (
                  <div className="h-full w-0.5 bg-border"></div>
                )}
              </div>
              {/* Timeline Content */}
              <div className="flex-1 pb-6">
                <p className="text-sm text-foreground">{work}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
