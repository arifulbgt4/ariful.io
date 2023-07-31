// React
import { FC } from "react";
// @mui
import {
  Box,
  Link,
  Stack,
  Avatar,
  Typography,
  IconButton,
  Hidden,
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

  return (
    <>
      <Hidden implementation="css" mdDown>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          ref={parallax.ref}
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
      </Hidden>
      <Hidden implementation="css" mdUp>
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
      </Hidden>
    </>
  );
};

export default PortfolioHeader;
