import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "ckosmichealth",
  description:
    "At CKOSMIC Health City, we understand that your weight loss journey is not just about losing weight; it’s about reclaiming your health, confidence, and quality of life.",
};

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

export default function SubRootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${plusJakartaSans.variable}${poppins.variable} ${inter.variable} ${instrument.variable}`}
      >
        <>
          <main>{children}</main>
        </>
      </body>
    </html>
  );
}
