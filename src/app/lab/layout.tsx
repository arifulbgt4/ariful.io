import Laboratory from "src/widgets/Laboratory";

export const metadata = {
  title: "Laboratory",
  description: "Experiment components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Laboratory>{children}</Laboratory>
    </main>
  );
}
