import type { Metadata } from "next";
import { Bodoni_Moda, Archivo } from "next/font/google";
import "./globals.css";

// Display face — high-contrast editorial serif (Vogue-style mastheads).
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
  // next/font has no fallback-metric data for Bodoni Moda; skip the lookup to silence the warning.
  adjustFontFallback: false,
});

// Body face — clean grotesque. Body copy is set at weight 500 minimum (see globals.css).
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SUZZIESATURN — Live Your Dreams In Real Time",
  description:
    "Black-owned streetwear from the DMV. Editorial pieces, made in real time. Est. 2017.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${archivo.variable}`}>
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
