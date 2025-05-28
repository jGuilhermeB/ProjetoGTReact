import React from "react";
import { useContext } from "react"
import { ProductContext } from "../context/CardContext"

const OrdenacaoRelevante = () => {
  const { ordenarProdutos } = useContext(ProductContext)

  const handleSortChange = (e) => {
    ordenarProdutos(e.target.value);
  };

  return (
    <div className="flex justify-between items-center mb-6 p-5">
      <div>
        <h2 className="text-sm text-gray-800">Resultados para “Tênis” - 389 produtos</h2>
      </div>
      <div>
        <select
          className="font-medium border border-gray-300 bg-[#F9F8FE] rounded p-3"
          onChange={handleSortChange}
        >
          <option value="">Ordenar por: mais relevantes</option>
          <option value="low">Menor preço</option>
          <option value="high">Maior preço</option>
        </select>
      </div>
    </div>
  )
}

export default OrdenacaoRelevante;
