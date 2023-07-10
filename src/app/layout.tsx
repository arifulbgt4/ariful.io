import ThemeContextProvider from "src/theme";
import DefaultLayout from "src/layouts/DefaultLayout";

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
        </body>
      </ThemeContextProvider>
    </html>
  );
}
