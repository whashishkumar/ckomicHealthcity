"use client";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Providers } from "../context/providers";

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});
const instrument = localFont({
  src: [
    {
      path: "../public/fonts/InstrumentSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-instrument",
});

const plusJakartaSans = localFont({
  src: [
    {
      path: "../public/fonts/PlusJakartaSans-SemiBold.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-plusJakartaSans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${plusJakartaSans.variable}${poppins.variable} ${inter.variable} ${instrument.variable}antialiased`}
      >
        <>
          <Providers>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </Providers>
        </>
      </body>
    </html>
  );
}
