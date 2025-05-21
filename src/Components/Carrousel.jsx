import React, { useRef, useState } from 'react'
import { Carousel } from 'antd'
import '../App.css'
import sneakerImg from '../assets/White-Sneakers-PNG-Clipart 2.png'
import ShowThumbs from './ShowThumbs'

const slides = [
  { bg: '#E2E3FF' },
  { bg: '#FFE8BC' },
  { bg: '#FFC0BC' },
  { bg: '#E8DFCF' }
]

const CustomCarousel = () => {
  const carouselRef = useRef()
  const [selected, setSelected] = useState(0)

  const handleThumbClick = idx => {
    setSelected(idx)
    carouselRef.current.goTo(idx)
  }

  return (

    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-10">
      <div className='w-[700px] h-[570px] rounded-sm'>
        <Carousel
          arrows
          infinite={false}
          dots={false}
          ref={carouselRef}
          beforeChange={(_, next) => setSelected(next)}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              style={{ background: slide.bg, height: '570px', width: '100%' }}
              className="flex items-center justify-center"
            >
              <img
                src={sneakerImg}
                alt="Tênis"
                className="object-contain w-[400px] h-[400px] mx-auto"
              />
            </div>
          ))}
        </Carousel>
        <ShowThumbs selected={selected} onSelect={handleThumbClick} />
      </div>
    </div>
  )
}

export default CustomCarousel
