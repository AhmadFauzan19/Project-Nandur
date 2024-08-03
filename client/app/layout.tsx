import type { Metadata } from "next";
import { Roboto, Righteous } from 'next/font/google';
import "./globals.css";
import Profile from '../components/profile';

const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '700'],
  variable: '--font-roboto'
});

const righteous_init = Righteous({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-righteous'
});

export const metadata: Metadata = {
  title: "Planty",
  description: "Plant Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_init.variable} ${righteous_init.variable}`}>
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
