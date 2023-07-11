"use client";
export * from "./Types";

// React
import { FC } from "react";
// @mui
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Link from "@mui/material/Link";

// Icons
import Launch from "@mui/icons-material/Launch";

// Types
import { JobDetailsOptions } from "./Types";

const JobDetails: FC<JobDetailsOptions> = ({ data }) => {
  const { title, company, address, works, url, startDate, endDate } = data;
  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader
        title={title}
        subheader={`${company} - ${address}`}
        action={
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="caption">
              {startDate} - {endDate}
            </Typography>
            {/* <Link
              color="text.primary"
              variant="body2"
              href={url}
              target="_blank"
            >
              <Launch fontSize="small" />
            </Link> */}
          </Stack>
        }
      />
      <CardContent>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {works?.map((work, i) => (
            <TimelineItem
              sx={{ minHeight: (theme) => theme.spacing(5.2) }}
              key={i}
            >
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                {works.length - 1 > i && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>{work}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
};

export default JobDetails;
