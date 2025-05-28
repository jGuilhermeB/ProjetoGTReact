import React, { useEffect, useState } from 'react';
import sneakerImg from '../assets/White-Sneakers-PNG-Clipart 2.png';
import ornamentImg from '../assets/Ornament.png';

const slides = [
  {
    title: 'Queima de estoque Nike',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    buttonText: 'Ver Ofertas',
    buttonUrl: '#',
    image: sneakerImg,
    ornament: ornamentImg,
    bgColor: '#F5F5F5',
  },
  {
    title: 'Queima de estoque Nike',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    buttonText: 'Ver Ofertas',
    buttonUrl: '#',
    image: sneakerImg,
    ornament: ornamentImg,
    bgColor: '#F5F5F5',
  },
  {
    title: 'Queima de estoque Nike',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
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
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

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
              <div className="w-full max-w-xl">
                <p className="text-orange-500 font-semibold mb-2">
                  Melhores ofertas personalizadas
                </p>
                <h1 className="text-8xl font-black mb-4">{slide.title}</h1>
                <p className="text-gray-500 mb-8">{slide.description}</p>
                <a
                  href={slide.buttonUrl}
                  className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded text-white font-bold text-lg"
                >
                  {slide.buttonText}
                </a>
              </div>
              {/* Imagens */}
              <div className="relative mr-20">
                <img
                  src={slide.ornament}
                  alt="bolinhas"
                  className="relative left-160 top-0 w-42 h-42"
                />
                <img
                  src={slide.image}
                  alt="Tênis"
                  className="relative bottom-20 right-25 rotate-[337deg] w-[733.51px]"
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