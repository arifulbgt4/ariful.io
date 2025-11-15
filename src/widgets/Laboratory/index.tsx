"use client";
// React
import { useTheme } from "next-themes";

const Laboratory = ({ children }: { children: React.ReactNode }) => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section>
      <div className="mb-8 flex items-center justify-between bg-accent px-8 py-4 shadow-sm">
        <h2 className="text-4xl font-bold text-primary">Laboratory</h2>
        <button
          onClick={toggleTheme}
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Change Color Mode
        </button>
      </div>
      {children}
    </section>
  );
};

export default Laboratory;
