// src/pages/ProductListingPage.jsx
import React from "react";
import FilterGroup from "../Components/FilterGroup";

const ProductListingPage = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          Resultados para “Tênis” - 389 produtos
        </h2>
        <div>
          <label className="font-medium mr-5">Ordenar por:</label>
          <select className="border border-gray-300 bg-[#F9F8FE] rounded px-3 py-1">
            <option>mais relevantes</option>
            <option>menor preço</option>
            <option>maior preço</option>
          </select>
        </div>
      </div>

      <div className="flex gap-6">
        <FilterGroup />
        {/* Aqui você pode incluir o componente ProductListing */}
        {/* <ProductListing /> */}
      </div>
    </div>
  );
};

export default ProductListingPage;