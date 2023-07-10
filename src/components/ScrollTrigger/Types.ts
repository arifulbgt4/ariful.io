import { ReactElement } from "react";

export interface ScrollTriggerOptions {
  window?: () => Window;
  children: (t: boolean) => ReactElement;
  threshold?: number;
}
