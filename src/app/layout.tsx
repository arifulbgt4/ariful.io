// Context
import ThemeContextProvider from "src/theme";
// Layouts
import DefaultLayout from "src/layouts/DefaultLayout";
// Widgets
import Footer from "src/widgets/Footer";

export const metadata = {
  title: "Ariful islam",
  description:
    "Ariful's personal portfolio, Fullstack, Full-stack, Full stack, Fullstack developer",
  viewport: "initial-scale=1, width=device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body suppressHydrationWarning={true}>
          <DefaultLayout>{children}</DefaultLayout>
          <Footer />
        </body>
      </ThemeContextProvider>
    </html>
  );
}
