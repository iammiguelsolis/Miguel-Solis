import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageToggle from "./components/atoms/LanguageToggle";
import Navbar from "./components/templates/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Miguel Alonso Solis Cunza | Software Engineer in Training',
  description: 'Estudiante de Ingeniería de Software en la UNMSM y practicante en Mibanco. Enfocado en backend, automatización QA, DevSecOps, cloud y GitHub Agents. Certificado GitHub Actions GH-200.',
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es' className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden`}>
      <body className='antialiased'>
        <Navbar />
        <main>{children}</main>
        <LanguageToggle />
      </body>
    </html>
  );
}

