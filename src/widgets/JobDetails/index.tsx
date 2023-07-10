"use client";

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

const JobDetails = () => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader
        title="Lead Front-end Developer (remote)"
        subheader="RoadStr - Los Angeles, USA"
        action={
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="caption">11/2021 - 02/2023</Typography>
            <Link variant="body2" href="https://roadstr.io" target="_blank">
              <Launch fontSize="small" />
            </Link>
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
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Technical leadership: Ensuring that the codebase is clean,
              scalable, and maintainable.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Team management: Managing and mentoring front-end development team
              members, setting goals and deadlines, and ensuring that the team
              is working efficiently.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Quality assurance: Ensuring the quality of the front-end codebase
              through testing, debugging, and code review to best practices.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
            </TimelineSeparator>
            <TimelineContent>
              Documentation: Ensuring that the codebase is well documented,
              including the code, architecture, and design decisions.
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  );
};

export default JobDetails;
