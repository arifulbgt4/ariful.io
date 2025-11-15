"use client";
// React
import { FC, cloneElement, useState, useEffect } from "react";

// Types
import { ScrollTriggerOptions } from "./Types";

const useScrollTrigger = (options: {
  disableHysteresis?: boolean;
  threshold?: number;
  target?: Window;
}) => {
  const { disableHysteresis = false, threshold = 0, target } = options;
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = target || window;
      const scrollTop =
        targetElement.pageYOffset !== undefined
          ? targetElement.pageYOffset
          : (targetElement as any).scrollY;

      if (disableHysteresis) {
        setTrigger(scrollTop > threshold);
      } else {
        if (scrollTop > threshold && !trigger) {
          setTrigger(true);
        } else if (scrollTop <= threshold && trigger) {
          setTrigger(false);
        }
      }
    };

    const targetElement = target || window;
    targetElement.addEventListener("scroll", handleScroll);
    return () => targetElement.removeEventListener("scroll", handleScroll);
  }, [disableHysteresis, threshold, target, trigger]);

  return trigger;
};

const ScrollTrigger: FC<ScrollTriggerOptions> = ({
  children,
  window,
  threshold = 0,
  disableHysteresis = false,
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: !disableHysteresis,
    threshold,
    target: window ? window() : undefined,
  });
  return cloneElement(children(trigger));
};

export default ScrollTrigger;
