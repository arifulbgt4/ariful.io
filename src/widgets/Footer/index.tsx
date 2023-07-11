"use client";
// @mui
import { Stack, Typography } from "@mui/material";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <Stack alignItems="center" sx={{ p: 2 }}>
        <Typography color="text.icon" variant="caption">
          Copyright © {date} ariful.io. All rights reserved.
        </Typography>
      </Stack>
    </footer>
  );
};

export default Footer;
