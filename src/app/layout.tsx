import type { Metadata } from "next";
import { Marcellus, Mulish } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Essential Trust Financial | Holistic Wealth Planning in Newport Beach, CA",
    template: "%s | Essential Trust Financial",
  },
  description:
    "Holistic wealth planning, tax-efficient strategies, life insurance, and estate planning support for professionals, business owners, and families in Newport Beach, CA.",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${marcellus.variable} ${mulish.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
