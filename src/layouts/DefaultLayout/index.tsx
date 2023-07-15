"use client";

// React
import { FC, useContext } from "react";
// Next
import { usePathname } from "next/navigation";
// @mui
import {
  Container,
  Box,
  Stack,
  Grid,
  IconButton,
  Hidden,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// Icons
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
// packages
import { ParallaxProvider } from "react-scroll-parallax";

// widgets
import PortfolioHeader from "src/widgets/PortfolioHeader";
import ListNavigation from "src/widgets/ListNavigation";
import OpenSource from "src/widgets/OpenSource";
// Context
import { ColorModeContext } from "src/theme";
// Types
import { DefaultLayoutOptions } from "./Types";

const LANDING_PATHS = ["/"];

const DefaultLayout: FC<DefaultLayoutOptions> = ({ children }) => {
  const pathName = usePathname();
  const themes = useTheme();

  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <ParallaxProvider>
      <Container
        maxWidth={false}
        sx={{
          minHeight: "100vh",
        }}
      >
        <Grid
          container
          spacing={10}
          position="sticky"
          alignItems="center"
          top={-80}
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              zIndex: 3000,
              background: (theme) => theme.palette.background.default,
            },
          })}
        >
          <Grid item xs={9}>
            <PortfolioHeader
              disableLinks
              animation={Boolean(LANDING_PATHS.includes(pathName))}
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
        <Grid container spacing={12} rowSpacing={3}>
          <Grid component={Hidden} item xs implementation="css" mdDown>
            <Box position="sticky" top={80}>
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
          <Grid component={Hidden} item xs={12} implementation="css" mdUp>
            <Paper sx={{ p: 2 }}>
              <ListNavigation />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ParallaxProvider>
  );
};

export default DefaultLayout;
