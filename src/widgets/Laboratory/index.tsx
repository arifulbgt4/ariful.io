"use client";
// React
import { useContext } from "react";
// @mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Context
import { ColorModeContext } from "src/theme";

const Laboratory = ({ children }: { children: React.ReactNode }) => {
  const { toggleColorMode } = useContext(ColorModeContext);
  return (
    <section>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow: 1,
          alignItems: "center",
          background: (theme) => theme.palette.action.focus,
          py: 2,
          px: 4,
          mb: 4,
        }}
      >
        <Typography variant="h2" color="primary">
          Laboratory
        </Typography>
        <Button variant="contained" onClick={toggleColorMode}>
          Change Color Mode
        </Button>
      </Box>
      {children}
    </section>
  );
};

export default Laboratory;
