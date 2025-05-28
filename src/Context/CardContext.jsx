import React, { createContext } from "react";
import teniscard from "../assets/teniscard.svg";

export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
  const products = Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    image: teniscard,
    title: `V8 - Masculino K-Swiss `,
    category: "Tênis",
    originalPrice: 200 + i * 10,
    discountPrice: 100 + i * 5,
    hasDiscount: true,
  }));

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};