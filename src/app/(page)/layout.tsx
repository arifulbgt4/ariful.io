// Layouts
import LandingLayout from "src/layouts/LandingLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LandingLayout>{children} </LandingLayout>;
}
