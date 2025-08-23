import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tek Spicy",
  description: "Cooking somthing spicy!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
