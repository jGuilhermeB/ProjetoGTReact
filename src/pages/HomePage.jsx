import React from 'react'
import OutroSlider from '../Components/OutroSlider'
import FeaturedSection from '../Components/ColecoesEmD'
import OfertaEspecial from '../Components/OfertaEspecial'
import ProductCard from '../Components/ProductCard'
import { ProductProvider } from '../Context/CardContext'

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center bg-[#f9f9f9]">
      <OutroSlider />
      <FeaturedSection />
      <ProductProvider>
        <ProductCard limit={8} className="mt-16 relative w-full" />
      </ProductProvider>
      <OfertaEspecial />
    </div>
  )
}

export default HomePage