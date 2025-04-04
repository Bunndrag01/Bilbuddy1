export const metadata = {
  title: 'BilBuddy',
  description: 'Oversikt over bil, kostnader og service',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <head />
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
