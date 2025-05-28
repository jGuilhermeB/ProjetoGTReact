import React from 'react'
import ProductCard from '../Components/ProductCard'
import FilterGroup from '../Components/FilterGroup'
import OrdenacaoRelevante from '../Components/OrdenacaoRelevante'
import { ProductProvider } from '../context/CardContext'

const ProductListingPage = () => {
  return (


    <div className=" bg-[#f6f6fe] min-h-screen">
      <div>
        <OrdenacaoRelevante />
      </div>
      <div className='flex'>
        {/* Filtro lateral */}
        <div className="w-[320px] min-w-[260px]">
          <FilterGroup />
        </div>
        {/* Listagem de produtos */}
        <div className="flex-1 px-8 py-12">
          <ProductProvider>
            <ProductCard limit={15} className="pt-0 pb-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3" />
          </ProductProvider>
        </div>
      </div>

    </div>
  )
}

export default ProductListingPage