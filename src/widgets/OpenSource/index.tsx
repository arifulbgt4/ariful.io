// React
import { FC } from "react";
// Next
import Link from "next/link";
// Icons
import { Github, Globe } from "lucide-react";

// Types
import { OpenSourceProps } from "./Types";

const OpenSource: FC<OpenSourceProps> = () => {
  return (
    <div>
      <h2 className="mb-8 text-xl font-semibold">Open Source Contributions</h2>

      {/* MuiStory Card */}
      <div className="mb-8 rounded-lg border bg-card p-4 text-card-foreground shadow-lg">
        <h3 className="mb-2 text-base font-bold">MuiStory</h3>
        <p className="mb-2 text-sm text-muted-foreground">
          MuiStory is a design system for Next.js that uses MUI Core v5 theming.
          It provides a boilerplate that makes it easy to integrate Storybook
          with MUI to preview your components and their themes in a live
          environment.
        </p>
        <div className="flex gap-1">
          <Link
            href="https://github.com/arifulbgt4/MuiStory"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            aria-label="GitHub - MuiStory"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://dev--647c84907213dc4172ffdcde.chromatic.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            aria-label="Website - MuiStory"
          >
            <Globe className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Wireflow Card */}
      <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-lg">
        <h3 className="mb-2 text-base font-bold">Wireflow</h3>
        <p className="mb-2 text-sm text-muted-foreground">
          Wireflow is free, online and open source tool for creating beautiful
          user flow prototypes. No Photoshop skills required!
        </p>
        <div className="flex gap-1">
          <Link
            href="https://github.com/vanila-io/wireflow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            aria-label="GitHub - Wireflow"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://app.wireflow.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            aria-label="Website - Wireflow"
          >
            <Globe className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
