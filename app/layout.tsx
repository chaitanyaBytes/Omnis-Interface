import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { PrivyProvider } from "@/providers/privy-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
// import { ChainProvider } from "@/providers/chain-context";
import { Providers } from "@/providers/rainbow-kit-provider";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Omnis",
    "Trading",
    "BSC",
    "Binance",
    "Defi",
  ],
  creator: "Ising Research",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@IsingResearch",
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} !pb-10 relative min-h-screen antialiased flex flex-col`}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-[url('/backdrop.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed opacity-16 z-0" />
        {/* <PrivyProvider> */}
        <Providers>
          <Toaster position="top-center" />
          {/* <ChainProvider> */}
          <Header />
          {children}
          <Footer />
          {/* </ChainProvider> */}
        </Providers>
        {/* </PrivyProvider> */}
      </body>
    </html>
  );
}
