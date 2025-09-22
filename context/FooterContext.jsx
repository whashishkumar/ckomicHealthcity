"use client";
import { createContext, useState, useContext } from "react";
import api from "../lib/axios";

// Create a Footer context
const FooterContext = createContext(null);

// Provider component
export function FooterProvider({ children }) {
  const [footerItemsList, setFooterItemsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchFooterListItems = async () => {
    setLoading(true);
    try {
      const res = await api.get("/footer-menu");
      setFooterItemsList(res.data);
    } catch (error) {
      console.error("Failed to fetch footer items:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FooterContext.Provider
      value={{ footerItemsList, loading, fetchFooterListItems }}
    >
      {children}
    </FooterContext.Provider>
  );
}

// Custom hook to consume Footer context
export const useFooterList = () => {
  const ctx = useContext(FooterContext);
  if (!ctx)
    throw new Error("useFooterList must be used within a FooterProvider");
  return ctx;
};
