import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
      </nav>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
