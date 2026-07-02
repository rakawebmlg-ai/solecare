import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SoleCare — Jasa Cuci Sepatu Profesional Bandung",
    template: "%s | SoleCare",
  },
  description:
    "Jasa cuci sepatu profesional di Bandung. 9 treatment lengkap, antar-jemput gratis, tracking realtime. Kotor hari ini, kinclong besok.",
  keywords: [
    "cuci sepatu bandung",
    "jasa cuci sepatu",
    "laundry sepatu",
    "shoe cleaning",
    "SoleCare",
  ],
  openGraph: {
    title: "SoleCare — Jasa Cuci Sepatu Profesional Bandung",
    description:
      "9 treatment lengkap, antar-jemput gratis, tracking realtime. Kotor hari ini, kinclong besok.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
