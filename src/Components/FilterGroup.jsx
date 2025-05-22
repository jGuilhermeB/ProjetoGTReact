// src/Components/FilterGroup.jsx
import React from "react";

const FilterGroup = () => {
  return (
    <aside className="w-1/5 bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold border-b pb-2 mb-4">Filtrar por</h3>

      {/* Marca */}
      <div className="mb-4">
        <h4 className="font-bold mb-2">Marca</h4>
        <div className="space-y-1 text-sm">
          <label><input type="checkbox" className="mr-1" /> Adidas</label><br />
          <label><input type="checkbox" className="mr-1" /> Balenciaga</label><br />
          <label><input type="checkbox" className="mr-1" checked /> K-Swiss</label><br />
          <label><input type="checkbox" className="mr-1" /> Nike</label><br />
          <label><input type="checkbox" className="mr-1" /> Puma</label>
        </div>
      </div>

      {/* Categoria */}
      <div className="mb-4">
        <h4 className="font-bold mb-2">Categoria</h4>
        <div className="space-y-1 text-sm">
          <label><input type="checkbox" className="mr-1" checked /> Esporte e lazer</label><br />
          <label><input type="checkbox" className="mr-1" /> Casual</label><br />
          <label><input type="checkbox" className="mr-1" /> Utilitário</label><br />
          <label><input type="checkbox" className="mr-1" /> Corrida</label>
        </div>
      </div>

      {/* Gênero */}
      <div className="mb-4">
        <h4 className="font-bold mb-2">Gênero</h4>
        <div className="space-y-1 text-sm">
          <label><input type="checkbox" className="mr-1" checked /> Masculino</label><br />
          <label><input type="checkbox" className="mr-1" checked /> Feminino</label><br />
          <label><input type="checkbox" className="mr-1" /> Unisex</label>
        </div>
      </div>

      {/* Estado */}
      <div>
        <h4 className="font-bold mb-2">Estado</h4>
        <div className="space-y-1 text-sm">
          <label><input type="checkbox" className="mr-1" /> Novo</label><br />
          <label><input type="checkbox" className="mr-1" /> Usado</label>
        </div>
      </div>
    </aside>
  );
};

export default FilterGroup;