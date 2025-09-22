"use client";
import { createContext, useContext, useState } from "react";
import api from "../lib/axios";
const FaqContext = createContext(null);

export const FaqProvider = ({ children }) => {
  const [homeFaq, setHomeFaq] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchHomePageFaq = async () => {
    setLoading(true);
    try {
      const res = await api.get("/home/faq");
      setHomeFaq(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <FaqContext.Provider value={{ homeFaq, loading, fetchHomePageFaq }}>
      {children}
    </FaqContext.Provider>
  );
};

export const useFaqContext = () => {
  const ctx = useContext(FaqContext);
  if (!ctx) throw new Error("Faq must be used within a Faq Provider");
  return ctx;
};
