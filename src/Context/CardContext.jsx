import React, { createContext, useState } from "react";
import teniscard from "../assets/teniscard.svg";

// Criação do contexto
const ProductContext = createContext();

// Provider
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(
    Array.from({ length: 15 }).map((_, i) => ({
      id: i + 1,
      image: teniscard,
      title: `K-Swiss V8 - Masculino #${i + 1}`,
      category: "Tênis",
      originalPrice: 200 + i * 10,
      discountPrice: 100 + i * 5,
      hasDiscount: true,
    }))
  );

  const ordenarProdutos = (ordem) => {
    const ordenados = [...products];

    if (ordem === "low") {
      ordenados.sort((a, b) => a.discountPrice - b.discountPrice);
    } else if (ordem === "high") {
      ordenados.sort((a, b) => b.discountPrice - a.discountPrice);
    }

    setProducts(ordenados);
  };

  return (
    <ProductContext.Provider value={{ products, ordenarProdutos }}>
      {children}
    </ProductContext.Provider>
  );
};

// 🔁 Exporte fora de qualquer função ou bloco
export { ProductContext, ProductProvider };