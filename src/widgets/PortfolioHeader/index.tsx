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

const PortfolioHeader = ({ triger }: { triger: boolean }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
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
          <Link underline="hover" color="text.primary" href="/" variant="h5">
            Ariful islam
          </Link>
          <Typography color="text.secondary" variant="subtitle2">
            Fullstack engineer
          </Typography>
        </Box>
      </Stack>
      {!triger && (
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
  );
};

export default PortfolioHeader;
