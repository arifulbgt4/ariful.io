// React
import { FC, cloneElement } from "react";
// @mui
import useScrollTrigger from "@mui/material/useScrollTrigger";
// Types
import { ScrollTriggerOptions } from "./Types";

const ScrollTrigger: FC<ScrollTriggerOptions> = ({
  children,
  window,
  threshold = 0,
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold,
    target: window ? window() : undefined,
  });
  return cloneElement(children(trigger));
};

export default ScrollTrigger;
