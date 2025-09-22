"use client";
import { createContext, useContext, useState } from "react";
import api from "../lib/axios";

const AboutContext = createContext(null);

export function AboutProvider({ children }) {
  const [aboutUsDetail, setAboutUsDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBannerPageAboutInfo = async () => {
    setLoading(true);
    try {
      const res = await api.get("/home/about_section");
      setAboutUsDetail(res.data);
    } catch (error) {
      console.error("fail to fetch");
    } finally {
      setLoading(false);
    }
  };
  return (
    <AboutContext.Provider
      value={{ aboutUsDetail, loading, fetchBannerPageAboutInfo }}
    >
      {children}
    </AboutContext.Provider>
  );
}

export const useAboutContext = () => {
  const ctx = useContext(AboutContext);
  if (!ctx) {
    throw new Error("useAboutUs must be use with in Aboutus Provider");
  }
  return ctx;
};
