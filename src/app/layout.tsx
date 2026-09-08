import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import "@/styles/print.css";
import AnimatedBackground from "@/components/animated-background";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "James Hope — CV",
  description: "James Hope — Customer Service Assistant, Creative Technologist. Bridlington, UK.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col text-foreground">
        <AnimatedBackground />
        <div className="fixed inset-0 -z-5 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(15,15,30,0.4) 0%, rgba(10,10,18,0.7) 100%)' }} />
        {children}
      </body>
    </html>
  );
}
