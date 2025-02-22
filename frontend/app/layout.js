import { Geist, Geist_Mono } from "next/font/google";
import RetroFlowMenu from "@/components/Menu.jsx";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RetroFlow",
  description: "Awesome flow generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <RetroFlowMenu />
        {children}
      </body>
    </html>
  );
}
