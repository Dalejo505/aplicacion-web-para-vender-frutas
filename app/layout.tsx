import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: 'FrescaMarket — Fresh Fruit, Delivered from Farm to Door',
  description: 'The marketplace where fruit sellers and farms launch professional online stores in minutes. Manage orders, inventory, and deliveries with ease.',
  keywords: 'fresh fruit, buy fruit online, fruit marketplace, farm fresh, organic fruit delivery',
  openGraph: {
    title: 'FrescaMarket — Fresh Fruit, Delivered from Farm to Door',
    description: 'The marketplace where fruit sellers and farms launch professional online stores in minutes.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}