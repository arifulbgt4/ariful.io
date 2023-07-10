//React
import { useContext } from "react";
// Next
import { useRouter, usePathname } from "next/navigation";
// @mui
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { useTheme } from "@mui/material/styles";
// Icons
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";

// Components
import ScrollTrigger from "src/components/ScrollTrigger";
// Context
import { ColorModeContext } from "src/theme";

const PortfolioHeader = () => {
  const router = useRouter();
  const pathName = usePathname();
  const themes = useTheme();

  const { toggleColorMode } = useContext(ColorModeContext);

  const onHandleTabs = (v: any, newValue: string) => {
    router.push(newValue);
  };

  return (
    <ScrollTrigger disableHysteresis>
      {(trigger) => (
        <>
          <Card elevation={0}>
            <Collapse
              in={!trigger}
              timeout={{
                exit: 500,
                enter: 250,
              }}
              unmountOnExit
              easing={{
                enter: "cubic-bezier(0, 0, 0, 0)",
                exit: "cubic-bezier(0, 0, 0, 0)",
              }}
            >
              <CardHeader
                avatar={<Avatar variant="rounded">A</Avatar>}
                title="Ariful islam"
                subheader="Fullstack Developer"
                action={
                  <IconButton onClick={toggleColorMode}>
                    {themes.palette.mode === "dark" ? (
                      <LightModeOutlined />
                    ) : (
                      <DarkModeOutlined />
                    )}
                  </IconButton>
                }
              />
            </Collapse>
            <Collapse
              in={!trigger}
              timeout={{
                exit: 500,
                enter: 400,
              }}
              unmountOnExit
              easing={{
                enter: "cubic-bezier(0, 0, 0, 0)",
                exit: "cubic-bezier(0, 0, 0, 0)",
              }}
            >
              <CardContent sx={{ pt: 0 }}>
                <Typography variant="subtitle1">
                  I possess over eight years of expertise in front-end
                  technologies and frameworks, with a strong emphasis on
                  creating clean, efficient, and user-friendly interfaces for
                  web and mobile applications.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>

          <AppBar
            position="sticky"
            color="inherit"
            sx={{
              boxShadow: 5,
              mb: 5,
              borderRadius: 1,
              overflow: "hidden",
              transition: "0.5s",
            }}
            style={{
              top: 8,
            }}
          >
            <Tabs onChange={onHandleTabs} value={pathName}>
              <Tab label="Work History" value="/" />
              {/* <Tab label="Projects" value="/projects" />
              <Tab label="Blogs" value="/blogs" /> */}
            </Tabs>
          </AppBar>
        </>
      )}
    </ScrollTrigger>
  );
};

export default PortfolioHeader;
