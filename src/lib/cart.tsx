"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface CartItem {
  priceId: string;
  name: string;
  variant: string;
  price: number;
  img: string;
  qty: number;
}

interface CartContext {
  items: CartItem[];
  open: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "qty">) => void;
  updateQty: (priceId: string, qty: number) => void;
  remove: (priceId: string) => void;
  total: number;
  count: number;
}

const Ctx = createContext<CartContext | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sz_cart");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("sz_cart", JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((item: Omit<CartItem, "qty">) => {
    setItems(prev => {
      const existing = prev.find(i => i.priceId === item.priceId);
      if (existing) return prev.map(i => i.priceId === item.priceId ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
    setOpen(true);
  }, []);

  const updateQty = useCallback((priceId: string, qty: number) => {
    setItems(prev => qty <= 0 ? prev.filter(i => i.priceId !== priceId) : prev.map(i => i.priceId === priceId ? { ...i, qty } : i));
  }, []);

  const remove = useCallback((priceId: string) => {
    setItems(prev => prev.filter(i => i.priceId !== priceId));
  }, []);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <Ctx.Provider value={{ items, open, openCart: () => setOpen(true), closeCart: () => setOpen(false), addItem, updateQty, remove, total, count }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
