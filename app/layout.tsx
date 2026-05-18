import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { SITE } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CMC Formation Koudougou | Formations professionnelles au Burkina Faso",
  description:
    "Centre de formations professionnelles à Koudougou dans les métiers des mines, du BTP, de l'industrie, du commerce, de l'électricité, de la gestion et de la conduite d'engins lourds.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_BF",
    url: siteUrl,
    siteName: SITE.shortName,
    title: "CMC Formation Koudougou",
    description:
      "Formations professionnelles à Koudougou : mines, BTP, commerce, électricité, conduite d'engins lourds.",
    images: [{ url: "/images/logo.png", width: 1536, height: 1024, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMC Formation Koudougou",
    description:
      "Centre de formations professionnelles à Koudougou, Burkina Faso.",
    images: ["/images/logo.png"],
  },
  keywords: [
    "formation professionnelle Burkina Faso",
    "formation Koudougou",
    "CMC Formation",
    "formation mines Burkina Faso",
    "formation conduite engins lourds",
    "formation BTP Burkina",
    "formation commerce Koudougou",
    "formation électricité bâtiment",
    "formation HSE Burkina Faso",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${plusJakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
