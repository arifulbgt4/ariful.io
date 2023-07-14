"use client";
// React
import { FC } from "react";
// Next
import { useRouter, usePathname } from "next/navigation";
// @mui
import { Box, Typography, AppBar, Tabs, Tab } from "@mui/material";

import PortfolioHeader from "src/widgets/PortfolioHeader";

// Types
import { LandingLayoutOptions } from "./Types";

const LandingLayout: FC<LandingLayoutOptions> = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();

  const onHandleTabs = (v: any, newValue: string) => {
    router.push(newValue);
  };

  return (
    <>
      <PortfolioHeader animation={false} upAnimation />
      <Box p={2} position="relative">
        <Typography variant="subtitle1">
          I possess over eight years of expertise in front-end technologies and
          frameworks, with a strong emphasis on creating clean, efficient, and
          user-friendly interfaces for web and mobile applications.
        </Typography>
      </Box>
      <AppBar
        position="sticky"
        color="inherit"
        sx={{
          mb: 5,
          borderRadius: 1,
          overflow: "hidden",
          transition: "0.5s",
          top: 5,
        }}
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
