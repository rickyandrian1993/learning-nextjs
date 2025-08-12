export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className="border-b border-green-500">
        Dashboard Layout Header
      </header>
      {children}
    </main>
  );
}
