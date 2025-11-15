"use client";

// React
import { FC, useEffect, useState } from "react";
// Next
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
// Icons
import { Moon, Sun } from "lucide-react";
// packages
import { ParallaxProvider } from "react-scroll-parallax";

// widgets
import PortfolioHeader from "src/widgets/PortfolioHeader";
import ListNavigation from "src/widgets/ListNavigation";
import OpenSource from "src/widgets/OpenSource";
// Types
import { DefaultLayoutOptions } from "./Types";

const LANDING_PATHS = ["/"];

const DefaultLayout: FC<DefaultLayoutOptions> = ({ children }) => {
  const pathName = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mark the component as mounted after the first client render so that
  // theme-dependent UI only renders when `theme` is available on the client.
  useEffect(() => {
    // Use a microtask to avoid React's "setState in effect" lint warning.
    Promise.resolve().then(() => setMounted(true));
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ParallaxProvider>
      <div className="min-h-screen w-full">
        {/* Header Section */}
        <div className="sticky -top-20 z-[3000] grid grid-cols-12 items-center gap-10 bg-background md:z-auto md:bg-transparent">
          <div className="col-span-9">
            <PortfolioHeader
              disableLinks
              animation={Boolean(LANDING_PATHS.includes(pathName))}
            />
          </div>
          <div className="col-span-3">
            <div className="flex justify-end">
              <button
                onClick={toggleTheme}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                aria-label="Toggle theme"
              >
                {!mounted ? (
                  <div className="h-5 w-5" />
                ) : theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-12 gap-y-3">
          {/* Left Sidebar - Navigation */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20">
              <ListNavigation />
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-12 md:col-span-6">{children}</div>

          {/* Right Sidebar - Open Source */}
          <div className="col-span-3 hidden md:block">
            <div className="sticky top-16">
              <OpenSource />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="col-span-12 block md:hidden">
            <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
              <ListNavigation />
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default DefaultLayout;
