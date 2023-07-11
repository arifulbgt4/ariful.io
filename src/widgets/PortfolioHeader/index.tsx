// @mui
import { Box, Link, Stack, Avatar, Typography } from "@mui/material";

const PortfolioHeader = () => {
  return (
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
  );
};

export default PortfolioHeader;
