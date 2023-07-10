"use client";
import { FC } from "react";

// @mui
import { Container } from "@mui/material";

// widgets
import PortfolioHeader from "src/widgets/PortfolioHeader";

// Types
import { DefaultLayoutOptions } from "./Types";

const DefaultLayout: FC<DefaultLayoutOptions> = ({ children }) => {
  return (
    <Container maxWidth="md">
      <PortfolioHeader />
      {children}
    </Container>
  );
};

export default DefaultLayout;
