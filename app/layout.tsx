import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Blessings Chilemba - Full-Stack Developer & UI/UX Designer",
  description: "Passionate full-stack developer creating exceptional digital experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "UI/UX Design", "Web Development", "Mobile Development"],
  authors: [{ name: "Blessings Chilemba" }],
  creator: "Blessings Chilemba",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: defaultUrl,
    title: "Blessings Chilemba - Full-Stack Developer & UI/UX Designer",
    description: "Passionate full-stack developer creating exceptional digital experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.",
    siteName: "Blessings Chilemba Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blessings Chilemba - Full-Stack Developer & UI/UX Designer",
    description: "Passionate full-stack developer creating exceptional digital experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
