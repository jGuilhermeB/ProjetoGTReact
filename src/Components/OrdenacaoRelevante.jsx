import React from "react"

const OrdenacaoRelevante = () => {
    return (

        <div className="flex justify-between items-center mb-6">
            <div>
                <h2 className="text-xl font-bold">Resultados para “Tênis” - 389 produtos</h2>
            </div>
            <div>
                <label className="font-medium mr-5">Ordenar por:</label>
                <select className="border border-gray-300 bg-[#F9F8FE] rounded px-3 py-1">
                    <option>mais relevantes</option>
                    <option>menor preço</option>
                    <option>maior preço</option>
                </select>
            </div>
        </div>

    )
}

export default OrdenacaoRelevante