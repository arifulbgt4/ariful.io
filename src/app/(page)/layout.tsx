// Layouts
import LandingLayout from "src/layouts/LandingLayout";

export const metadata = {
  title: "Ariful islam",
  description:
    "Ariful's personal portfolio, Fullstack, Full-stack, Full stack, Fullstack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LandingLayout>{children} </LandingLayout>;
}
