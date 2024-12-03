import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Poppins } from "next/font/google";

const Poppins_init = Poppins({ 
   subsets: ["latin"],
   weight: ["100","200", "300","400", "500", "600", "700", "800", "900"], 
   variable: "--font-Poppins",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className={Poppins_init.variable}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}