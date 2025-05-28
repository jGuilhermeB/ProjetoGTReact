import React from 'react'
import OutroSlider from '../Components/OutroSlider'
import FeaturedSection from '../Components/ColecoesEmD'

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center bg-[#f9f9f9]">
      <OutroSlider />
      <FeaturedSection />
    </div>
  )
}

export default HomePage