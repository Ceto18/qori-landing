import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://qoriid.com"),

  title: "Qori ID - Tu Identidad Digital Redefinida",

  description:
    "Comparte tu perfil profesional de forma elegante, segura y con total control. Una tarjeta digital premium para profesionales que se destacan.",

  generator: "v0.app",

  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Qori ID - Tu Identidad Digital Redefinida",

    description:
      "Comparte tu perfil profesional de forma elegante, segura y con total control. Una tarjeta digital premium para profesionales que se destacan.",

    url: "https://qoriid.com",

    siteName: "Qori ID",

    images: [
      {
        url: "/qori-logo.png",
        width: 512,
        height: 512,
        alt: "Qori ID",
      },
    ],

    locale: "es_PE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Qori ID - Tu Identidad Digital Redefinida",

    description:
      "Comparte tu perfil profesional de forma elegante, segura y con total control.",

    images: ["/qori-logo.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}