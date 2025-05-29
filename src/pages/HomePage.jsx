import React from 'react'
import OutroSlider from '../Components/OutroSlider'
import FeaturedSection from '../Components/ColecoesEmD'
import OfertaEspecial from '../Components/OfertaEspecial'
import ProductCard from '../Components/ProductCard'

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center bg-[#F9F8FE]">
      <OutroSlider />
      <FeaturedSection />
      <ProductCard limit={8} className="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[10px] mb-4" />
      <OfertaEspecial />
    </div>
  )
}

export default HomePage