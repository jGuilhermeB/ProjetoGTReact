import React, { useEffect, useState } from 'react';
import sneakerImg from '../assets/White-Sneakers-PNG-Clipart 2.png';
import ornamentImg from '../assets/Ornament.png';

const slides = [
  {
    titleLines: ['Queima de', 'estoque Nike'],
    descriptionLines: [
      'Domine as quadras com os tênis Nike! Conforto, estilo e design.',
    ],
    buttonText: 'Ver Ofertas',
    buttonUrl: '#',
    image: sneakerImg,
    ornament: ornamentImg,
    bgColor: '#F5F5F5',
  },
  {
    titleLines: ['Queima de', 'estoque Nike'],
    descriptionLines: [
      'Domine as quadras com os tênis Nike! Conforto, estilo e design.',
    ],
    buttonText: 'Ver Ofertas',
    buttonUrl: '#',
    image: sneakerImg,
    ornament: ornamentImg,
    bgColor: '#F5F5F5',
  },
  {
    titleLines: ['Queima de', 'estoque Nike'],
    descriptionLines: [
      'Domine as quadras com os tênis Nike! Conforto, estilo e design.',
    ],
    buttonText: 'Ver Ofertas',
    buttonUrl: '#',
    image: sneakerImg,
    ornament: ornamentImg,
    bgColor: '#F5F5F5',
  },
];

const OutroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplay) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div
      className="relative w-full overflow-hidden bg-white"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      {/* Slides */}
      <div className="relative h-[800px] md:h-[80vh] min-h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ backgroundColor: slide.bgColor }}
          >
            <div className="flex justify-between items-center h-full w-full px-30">
              {/* Texto */}
              <div className="w-full max-w-xl flex flex-col justify-between h-[300px]">
                <div>
                  <p className="text-orange-500 font-semibold mb-2">
                    Melhores ofertas personalizadas
                  </p>
                  <h1
                    className="font-black leading-tight"
                    style={{ fontSize: '3.6rem' }}
                  >
                    {slide.titleLines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </h1>
                </div>

                <div>
                  <p
                    className="text-gray-500 font-extralight text-sm h-[80px]"
                    style={{ lineHeight: '1.4', maxWidth: '24ch' }}
                  >
                    {slide.descriptionLines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </p>

                </div>

                <div>
                  <a
                    href={slide.buttonUrl}
                    className="bg-pink-600 hover:bg-pink-700 px-12 py-2 rounded text-white"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>

              {/* Imagens */}
              <div className="relative mr-10">
                <img
                  src={slide.ornament}
                  alt="bolinhas"
                  className="relative left-110 top-0 w-42 h-42"
                />
                <img
                  src={slide.image}
                  alt="Tênis"
                  className="relative bottom-20 right-5 rotate-[337deg] w-[733.51px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-pink-600 w-3' : 'bg-pink-300'
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default OutroSlider;
