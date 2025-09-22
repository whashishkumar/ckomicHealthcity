"use client";
import { createContext, useContext, useState } from "react";
import api from "../lib/axios";

const DataContext = createContext(null);

export function HeaderContext({ children }) {
  const [menuItemsList, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMenuListItems = async () => {
    setLoading(true);
    const res = await api.get("/menus");
    setMenuItems(res.data);
    setLoading(false);
  };

  return (
    <DataContext.Provider
      value={{ menuItemsList, loading, fetchMenuListItems }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useMenuList() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used inside HeaderContext");
  return ctx;
}
