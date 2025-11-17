"use client";
// React
import React, { FC } from "react";
// Next
import Link from "next/link";
// Icons
import { Github, Linkedin } from "lucide-react";
// packages
import { useParallax } from "react-scroll-parallax";

import { PortfolioHeaderProps } from "./Types";

const PortfolioHeader: FC<PortfolioHeaderProps> = ({
  disableLinks = false,
  animation = true,
  upAnimation = false,
}) => {
  const parallax = useParallax<HTMLDivElement>({
    translateY: [animation ? -800 : 0, 0, "easeIn"],
    ...(upAnimation && { translateY: [530, -117, "easeIn"] }),
    opacity: [-10, 10],
  });

  return (
    <>
      {/* Desktop / medium-and-up header (visible from md and larger) */}
      <div className="hidden md:block">
        <div
          ref={parallax.ref as React.RefObject<HTMLDivElement>}
          className="flex items-center justify-between"
          style={{ opacity: upAnimation ? 1 : 0 }}
        >
          <div className="flex p-4 pb-0">
            <Link href="/" className="no-underline">
              <div className="mr-3 flex h-[46px] w-[46px] items-center justify-center rounded-md bg-primary text-2xl font-semibold text-primary-foreground shadow-lg">
                A
              </div>
            </Link>

            <div>
              <Link
                href="/"
                className="text-2xl font-bold text-foreground hover:underline"
              >
                Ariful islam
              </Link>
              <p className="text-sm text-muted-foreground">
                Fullstack engineer
              </p>
            </div>
          </div>
          {!disableLinks && (
            <div className="mr-8 mt-4 flex gap-2">
              <Link
                href="https://www.linkedin.com/in/ariful25278/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/arifulbgt4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile header (visible up to md, hidden on lg+) */}
      <div className="block md:hidden">
        <div className="relative flex items-center justify-between py-2">
          <div className="flex p-4 pb-0">
            <Link href="/" className="no-underline">
              <div className="mr-3 flex h-[46px] w-[46px] items-center justify-center rounded-md bg-primary text-2xl font-semibold text-primary-foreground">
                A
              </div>
            </Link>

            <div>
              <Link
                href="/"
                className="text-2xl font-bold text-foreground hover:underline"
              >
                Ariful islam
              </Link>
              <p className="text-sm text-muted-foreground">Software engineer</p>
            </div>
          </div>
          {!disableLinks && (
            <div className="mr-8 mt-4 flex gap-2">
              <Link
                href="https://www.linkedin.com/in/ariful25278/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/arifulbgt4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PortfolioHeader;
