"use client";
// React
import React, { FC, RefObject } from "react";
// @mui
import {
  Box,
  Link,
  Stack,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
// Icons
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
// packages
import { useParallax } from "react-scroll-parallax";

import { PortfolioHeaderProps } from "./Types";

const PortfolioHeader: FC<PortfolioHeaderProps> = ({
  disableLinks = false,
  animation = true,
  upAnimation = false,
}) => {
  const parallax = useParallax<HTMLDivElement>({
    translateY: [animation ? -800 : 0, 0, "easeIn"],
    ...(upAnimation && { translateY: [530, -117, "easeIn"] }),
    opacity: [-10, 10],
  });

  // Cast ref to satisfy strict MUI Stack ref typing (expects RefObject<HTMLDivElement>)
  const stackRef = parallax.ref as RefObject<HTMLDivElement>;

  return (
    <>
      {/* Desktop / medium-and-up header (previously Hidden mdDown) should be visible from md and larger */}
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          ref={stackRef}
          sx={{
            opacity: upAnimation ? 1 : 0,
          }}
        >
          <Stack
            direction="row"
            sx={{
              p: 2,
              pb: 0,
            }}
          >
            <Link underline="none" href="/">
              <Avatar
                variant="rounded"
                sx={{
                  width: 46,
                  height: 46,
                  mr: 1.5,
                  boxShadow: 4,
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                A
              </Avatar>
            </Link>

            <Box>
              <Link
                underline="hover"
                color="text.primary"
                href="/"
                variant="h5"
              >
                Ariful islam
              </Link>
              <Typography color="text.secondary" variant="subtitle2">
                Fullstack engineer
              </Typography>
            </Box>
          </Stack>
          {!disableLinks && (
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
          )}
        </Stack>
      </Box>
      {/* Mobile header (previously Hidden mdUp) visible up to md, hidden on lg+ */}
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "block", lg: "none" },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          position="relative"
          py={1}
        >
          <Stack
            direction="row"
            sx={{
              p: 2,
              pb: 0,
            }}
          >
            <Link underline="none" href="/">
              <Avatar variant="rounded" sx={{ width: 46, height: 46, mr: 1.5 }}>
                A
              </Avatar>
            </Link>

            <Box>
              <Link
                underline="hover"
                color="text.primary"
                href="/"
                variant="h5"
              >
                Ariful islam
              </Link>
              <Typography color="text.secondary" variant="subtitle2">
                Fullstack engineer
              </Typography>
            </Box>
          </Stack>
          {!disableLinks && (
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
          )}
        </Stack>
      </Box>
    </>
  );
};

export default PortfolioHeader;
