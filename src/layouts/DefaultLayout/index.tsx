"use client";
import { FC } from "react";

// @mui
import { Container, Box, Stack } from "@mui/material";

// widgets
import PortfolioHeader from "src/widgets/PortfolioHeader";

// Types
import { DefaultLayoutOptions } from "./Types";

const DefaultLayout: FC<DefaultLayoutOptions> = ({ children }) => {
  return (
    <Stack
      sx={{
        mb: 5,
      }}
    >
      <Container maxWidth="md">
        <PortfolioHeader />
        {children}
      </Container>
    </Stack>
  );
};

export default DefaultLayout;
