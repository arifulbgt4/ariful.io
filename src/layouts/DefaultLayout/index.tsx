"use client";
import { FC } from "react";

// @mui
import { Container, Box, Stack, Grid } from "@mui/material";

// widgets
import PortfolioHeader from "src/widgets/PortfolioHeader";
import ListNavigation from "src/widgets/ListNavigation";
import OpenSource from "src/widgets/OpenSource";

// Types
import { DefaultLayoutOptions } from "./Types";

const DefaultLayout: FC<DefaultLayoutOptions> = ({ children }) => {
  return (
    <Stack>
      <Container maxWidth={false}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={3}>
            <ListNavigation />
          </Grid>
          <Grid item xs={12} md={6}>
            <PortfolioHeader />
            {children}
          </Grid>
          <Grid item xs={12} md={3}>
            <OpenSource />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default DefaultLayout;
