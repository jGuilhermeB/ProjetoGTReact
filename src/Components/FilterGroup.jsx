import React from "react"

const FilterGroup = () => {
  return (

    <aside className="w-[320px] min-w-[260px] max-w-full bg-white p-4 rounded shadow overflow-auto">
      <h3 className="text-lg font-semibold border-b pb-2 mb-4">Filtrar por</h3>


      <div className="mb-4">
        <h4 className="font-bold mb-2">Marca</h4>
        <div className=" accent-pink-500 space-y-1 text-sm">
          <label><input type="checkbox" className="mr-1" /> Adidaas</label><br />
          <label><input type="checkbox" className="mr-1" /> Balenciaga</label><br />
          <label><input type="checkbox" className="mr-1" checked /> K-Swiss</label><br />
          <label><input type="checkbox" className="mr-1" /> Nike</label><br />
          <label><input type="checkbox" className="mr-1" /> Puma</label>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-bold mb-2">Categoria</h4>
        <div className=" accent-pink-500 space-y-1 text-sm">
          <label><input type="checkbox" className="mr-1" checked /> Esporte e lazer</label><br />
          <label><input type="checkbox" className="mr-1" /> Casual</label><br />
          <label><input type="checkbox" className="mr-1" /> Utilitário</label><br />
          <label><input type="checkbox" className="mr-1" /> Corrida</label>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-bold mb-2">Gênero</h4>
        <div className=" accent-pink-500 space-y-1 text-sm">
          <label><input type="checkbox" className="mr-1" checked /> Masculino</label><br />
          <label><input type="checkbox" className="mr-1" checked /> Feminino</label><br />
          <label><input type="checkbox" className="mr-1" /> Unisex</label>
        </div>
      </div>

      <div>
        <h4 className="font-bold mb-2">Estado</h4>
        <div className=" accent-pink-500 space-y-1 text-sm">
          <label><input type="radio" className="mr-1 rounded-full" /> Novo</label><br />
          <label><input type="radio" className="mr-1" /> Usado</label>
        </div>
      </div>
    </aside>
  )
}

export default FilterGroup