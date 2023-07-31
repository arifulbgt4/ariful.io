// React
import { FC } from "react";
// @mui
import { Box, Link, Paper, Stack, Typography, IconButton } from "@mui/material";
// Icons
import {
  GitHub as GitHubIcon,
  LanguageOutlined as LanguageOutlinedIcon,
} from "@mui/icons-material";

// Types
import { OpenSourceProps } from "./Types";

const OpenSource: FC<OpenSourceProps> = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Open Source Contributions
      </Typography>
      <Paper elevation={6} sx={{ p: 2, mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
          MuiStory
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          MuiStory is a design system for Next.js that uses MUI Core v5 theming.
          It provides a boilerplate that makes it easy to integrate Storybook
          with MUI to preview your components and their themes in a live
          environment.
        </Typography>
        <Stack direction="row" spacing={0.4}>
          <Link
            color="text.secondary"
            href="https://github.com/arifulbgt4/MuiStory"
            target="_blank"
          >
            <IconButton size="small">
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Link>
          <Link
            color="text.secondary"
            href="https://dev--647c84907213dc4172ffdcde.chromatic.com/"
            target="_blank"
          >
            <IconButton size="small">
              <LanguageOutlinedIcon fontSize="small" />
            </IconButton>
          </Link>
        </Stack>
      </Paper>
      <Paper elevation={6} sx={{ p: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
          Wireflow
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Wireflow is free, online and open source tool for creating beautiful
          user flow prototypes. No Photoshop skills required!
        </Typography>
        <Stack direction="row" spacing={0.4}>
          <Link
            color="text.secondary"
            href="https://github.com/vanila-io/wireflow"
            target="_blank"
          >
            <IconButton size="small">
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Link>
          <Link
            color="text.secondary"
            href="https://app.wireflow.co"
            target="_blank"
          >
            <IconButton size="small">
              <LanguageOutlinedIcon fontSize="small" />
            </IconButton>
          </Link>
        </Stack>
      </Paper>
    </Box>
  );
};

export default OpenSource;
