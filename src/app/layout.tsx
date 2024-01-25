import '@/src/common/assets/styles/tailwind.scss';
import '@/src/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prueba técnica Mango',
  description: 'Prueba técnica Mango',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="menu" className="navbar">
          <div id="home" className="navbar__item">
            <Link href="/">Home</Link>
          </div>

          <div id="exercise1" className="navbar__item">
            <Link href="/exercise1">Exercise 1</Link>
          </div>

          <div id="exercise2" className="navbar__item">
            <Link href="/exercise2">Exercise 2</Link>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
