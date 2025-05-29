import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import '../App.css';
import sneakerImg from '../assets/White-Sneakers-PNG-Clipart 2.png';
import ShowThumbs from './ShowThumbs';

const slides = [
  { bg: '#E2E3FF' },
  { bg: '#FFE8BC' },
  { bg: '#FFC0BC' },
  { bg: '#DEC699' },
  { bg: '#E8DFCF' }, // Novo slide adicionado
];

const CustomCarousel = () => {
  const carouselRef = useRef();
  const [selected, setSelected] = useState(0);

  const handleThumbClick = (idx) => {
    setSelected(idx);
    if (carouselRef.current) {
      carouselRef.current.goTo(idx);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
      <div className="w-full max-w-[700px] text-sm text-gray-600 px-2">
        <div className='flex items-center justify-start mb-4'>
        <span className="font-bold text-gray-600">Home</span>
        <span className="mx-2">/</span>
        <span>Produtos</span>
        <span className="mx-2">/</span>
        <span>Tênis</span>
        <span className="mx-2">/</span>
        <span>Nike</span>
        <span className="mx-2">/</span>
        <span>Tênis Nike Revolution 6 Next Nature Masculino</span>
        </div>
        <div className="w-[700px] h-[570px] rounded-sm">
          <Carousel
            arrows
            infinite={true}
            dots={false}
            ref={carouselRef}
            beforeChange={(_, next) => setSelected(next)}
            className="bg-[#F9F8FE]"
          >
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className="slide-wrapper flex items-center justify-center"
              >
                <div
                  className="flex items-center rounded-b-full justify-center h-full w-full relative z-10"
                  style={{
                    backgroundColor: slide.bg,
                    height: '700px',
                    width: '700px',
                    borderRadius: '16px',
                  }}
                >
                  <img
                    src={sneakerImg}
                    alt="Tênis"
                    className="object-contain w-[400px] h-[400px] mx-auto"
                  />
                </div>
              </div>
            ))}
          </Carousel>
          <ShowThumbs selected={selected} onSelect={handleThumbClick} />
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;