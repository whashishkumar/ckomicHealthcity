import React from "react";
import { Providers } from "../../context/providers";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function LayoutWrapper({ children }) {
  return (
    <div>
      <Providers>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Providers>
    </div>
  );
}
