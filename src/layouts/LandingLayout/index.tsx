"use client";
// React
import { FC } from "react";
// Next
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
// Icons
import { Github, Linkedin } from "lucide-react";

import PortfolioHeader from "src/widgets/PortfolioHeader";

// Types
import { LandingLayoutOptions } from "./Types";

const LandingLayout: FC<LandingLayoutOptions> = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="md:-mt-4">
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <PortfolioHeader animation={false} upAnimation />
      </div>

      {/* Description Section */}
      <div className="relative z-[3] p-4">
        <p className="text-base leading-relaxed text-muted-foreground">
          I possess over eight years of expertise in front-end technologies and
          frameworks, with a strong emphasis on creating clean, efficient, and
          user-friendly interfaces for web and mobile applications.
        </p>

        {/* Mobile Social Links */}
        <div className="mt-4 mr-8 flex gap-2 md:hidden">
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
      </div>

      {/* Sticky Navigation Bar */}
      <div className="sticky top-1 mb-5 overflow-hidden rounded-md border bg-card transition-all duration-500 md:top-[75px] md:rounded-b-md md:rounded-t-none">
        {/* Tabs can be added here if needed */}
      </div>

      {/* Main Content */}
      {children}
    </div>
  );
};

export default LandingLayout;
