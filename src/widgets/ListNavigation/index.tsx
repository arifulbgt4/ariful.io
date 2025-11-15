"use client";
// Next
import { usePathname } from "next/navigation";
import Link from "next/link";
// Icons
import { FileText } from "lucide-react";
// Utils
import { cn } from "src/lib/utils";

const ListNavigation = () => {
  const pathName = usePathname();
  const isActive = pathName === "/contact";

  return (
    <nav className="px-4">
      <Link
        href="/contact"
        className={cn(
          "flex items-center gap-3 rounded-[10px] px-3 py-2 text-sm transition-colors hover:bg-accent",
          isActive && "text-primary"
        )}
      >
        <FileText className={cn("h-5 w-5", isActive && "text-primary")} />
        <span>Contact</span>
      </Link>
    </nav>
  );
};

export default ListNavigation;
