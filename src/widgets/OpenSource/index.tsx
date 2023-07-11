import { Box, Link, Paper, Stack, Typography, IconButton } from "@mui/material";
import {
  GitHub as GitHubIcon,
  LanguageOutlined as LanguageOutlinedIcon,
} from "@mui/icons-material";

const OpenSource = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 50,
      }}
    >
      <Typography variant="h6" sx={{ mb: 4 }}>
        Open Source Contributions
      </Typography>
      <Paper sx={{ p: 2, mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
          MuiStory
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Next.js v13..4.4 & mui core v5.13.3 theming
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
      <Paper sx={{ p: 2 }}>
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
