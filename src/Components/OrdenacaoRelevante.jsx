import React from "react"

const OrdenacaoRelevante = () => {
    return (

        <div className="flex justify-between items-center mb-6 p-5 ">
            <div>
                <h2 className="text-sm text-gray-800 ">Resultados para “Tênis” - 389 produtos</h2>
            </div>
            <div>
                {/* <label className="font-bold mr-5 w-full">Ordenar por:</label> */}
                <select className="font-medium border border-gray-300 bg-[#F9F8FE] rounded p-4 ">
                    <option>Ordenar por: mais relevantes</option>
                    <option>menor preço</option>
                    <option>maior preço</option>
                </select>
            </div>
        </div>

    )
}

export default OrdenacaoRelevante