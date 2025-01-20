import '@/app/ui/global.css';
import { baseFont } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${baseFont.className} antialiased`}>{children}</body>
    </html>
  );
}
