import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./provider";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Turon Stal Profil",
  description: "Turon Stal Profil",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="" sizes="any" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
