import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { PrivyProvider } from "@/providers/privy-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
// import { ChainProvider } from "@/providers/chain-context";
import { Providers } from "@/providers/rainbow-kit-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omnis",
  description: `Your crypto should work for you. Omnis${"'"}s AI-driven vaults auto-optimize leverage, manage risk, and compound profits—so you don${"'"}t have to.`,
};

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
