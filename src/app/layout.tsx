import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
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
        <div className="fixed inset-0 -z-5 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(15,25,45,0.3) 0%, rgba(8,15,28,0.6) 100%)' }} />
        {children}
      </body>
    </html>
  );
}
