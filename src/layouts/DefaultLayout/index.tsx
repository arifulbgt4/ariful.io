"use client";

// React
import { FC, useContext } from "react";
// Next
import { usePathname } from "next/navigation";
// @mui
import { Container, Box, Stack, Grid, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// Icons
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";

// widgets
import PortfolioHeader from "src/widgets/PortfolioHeader";
import ListNavigation from "src/widgets/ListNavigation";
import OpenSource from "src/widgets/OpenSource";
// Components
import ScrollTrigger from "src/components/ScrollTrigger";
// Context
import { ColorModeContext } from "src/theme";
// Types
import { DefaultLayoutOptions } from "./Types";

const LANDING_PATHS = ["/"];

const DefaultLayout: FC<DefaultLayoutOptions> = ({ children }) => {
  const pathName = usePathname();
  const themes = useTheme();

  console.log("first", LANDING_PATHS.includes(pathName));

  const { toggleColorMode } = useContext(ColorModeContext);
  return (
    <ScrollTrigger threshold={100}>
      {(trigger) => (
        <Container maxWidth={false}>
          <Grid
            container
            spacing={12}
            justifyContent="end"
            position="sticky"
            top={-96}
            zIndex={1}
          >
            <Grid
              item
              xs={
                Boolean(LANDING_PATHS.includes(pathName))
                  ? trigger
                    ? 9
                    : 6
                  : 9
              }
            >
              <PortfolioHeader
                triger={
                  Boolean(LANDING_PATHS.includes(pathName)) ? trigger : true
                }
              />
            </Grid>
            <Grid item xs={3}>
              <Stack direction="row" justifyContent="end">
                <IconButton onClick={toggleColorMode}>
                  {themes.palette.mode === "dark" ? (
                    <LightModeOutlined />
                  ) : (
                    <DarkModeOutlined />
                  )}
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
          <Grid container spacing={12}>
            <Grid item xs>
              <Box
                position="sticky"
                top={
                  LANDING_PATHS.includes(pathName) ? (trigger ? 80 : 65) : 80
                }
              >
                <ListNavigation />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {children}
            </Grid>
            <Grid item xs>
              <Box position="sticky" top={65}>
                <OpenSource />
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </ScrollTrigger>
  );
};

export default DefaultLayout;
