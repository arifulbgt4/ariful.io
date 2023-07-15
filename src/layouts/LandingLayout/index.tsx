"use client";
// React
import { FC } from "react";
// Next
import { useRouter, usePathname } from "next/navigation";
// @mui
import {
  Box,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Hidden,
  Stack,
  Link,
  IconButton,
} from "@mui/material";

import PortfolioHeader from "src/widgets/PortfolioHeader";

// Types
import { LandingLayoutOptions } from "./Types";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";

const LandingLayout: FC<LandingLayoutOptions> = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();

  const onHandleTabs = (v: any, newValue: string) => {
    router.push(newValue);
  };

  return (
    <>
      <Hidden implementation="css" mdDown>
        <PortfolioHeader animation={false} upAnimation />
      </Hidden>
      <Box p={2} position="relative" zIndex={3}>
        <Typography variant="subtitle1">
          I possess over eight years of expertise in front-end technologies and
          frameworks, with a strong emphasis on creating clean, efficient, and
          user-friendly interfaces for web and mobile applications.
        </Typography>
        <Hidden implementation="css" mdUp>
          <Stack direction="row" sx={{ mr: 4, mt: 2 }}>
            <Link
              underline="none"
              href="https://www.linkedin.com/in/ariful25278/"
              target="_blank"
            >
              <IconButton size="small">
                <LinkedInIcon />
              </IconButton>
            </Link>
            <Link
              underline="none"
              href="https://github.com/arifulbgt4"
              target="_blank"
            >
              <IconButton size="small">
                <GitHubIcon />
              </IconButton>
            </Link>
          </Stack>
        </Hidden>
      </Box>
      <AppBar
        position="sticky"
        color="inherit"
        sx={(theme) => ({
          mb: 5,
          borderRadius: 1,
          overflow: "hidden",
          transition: "0.5s",
          top: 5,
          [theme.breakpoints.down("md")]: {
            top: theme.spacing(9.4),
            borderRadius: `0 0 ${theme.spacing(1)} ${theme.spacing(1)}`,
          },
        })}
      >
        <Tabs
          textColor="inherit"
          indicatorColor="secondary"
          onChange={onHandleTabs}
          value={pathName}
        >
          <Tab label="Job History" value="/" />
        </Tabs>
      </AppBar>
      {children}
    </>
  );
};

export default LandingLayout;
