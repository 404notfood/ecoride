import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecoride",
  description: "Le covoitureur écologique par excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Liens de navigation rapide RGAA */}
          <div className="sr-only focus-within:not-sr-only">
            <a 
              href="#main-content" 
              className="absolute top-0 left-0 bg-emerald-500 text-white px-4 py-2 z-50 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Aller au contenu principal
            </a>
            <a 
              href="#main-navigation" 
              className="absolute top-0 left-32 bg-emerald-500 text-white px-4 py-2 z-50 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Aller à la navigation
            </a>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
