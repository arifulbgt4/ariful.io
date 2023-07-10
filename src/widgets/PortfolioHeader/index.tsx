// Next
import { useRouter, usePathname } from "next/navigation";

// @mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { IconButton } from "@mui/material";
import { LightMode } from "@mui/icons-material";

const PortfolioHeader = () => {
  const router = useRouter();
  const pathName = usePathname();
  const onHandleTabs = (v: any, newValue: string) => {
    router.push(newValue);
  };

  return (
    <Box
      sx={{
        background: (theme) => theme.palette.grey[900],
        boxShadow: 5,
      }}
    >
      <Box
        sx={{
          p: 3,
          borderRadius: 1,
        }}
      >
        <Grid container>
          <Grid item xs={12} md={12}>
            <Stack justifyContent="flex-end" alignItems="end" sx={{ mb: 1 }}>
              <IconButton>
                <LightMode />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={6} md={10}>
            <Stack>
              <Typography variant="h4">Ariful islam</Typography>
              <Typography variant="body1">Fullstack Developer</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={2}>
            <Stack alignItems="end">
              <Avatar sx={{ width: 60, height: 60 }}>A</Avatar>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Tabs onChange={onHandleTabs} value={pathName}>
        <Tab label="Work History" value="/" />
        <Tab label="Projects" value="/projects" />
        <Tab label="Blogs" value="/blogs" />
      </Tabs>
    </Box>
  );
};

export default PortfolioHeader;
