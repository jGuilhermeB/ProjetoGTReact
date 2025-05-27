import React, { useEffect, useState } from 'react';
import sneakerImg from '../assets/White-Sneakers-PNG-Clipart 2.png';
import ornamentImg from '../assets/Ornament.png';

const slides = [
  {
    title: 'Queima de estoque Nike 🔥',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    buttonText: 'Ver Ofertas',
    buttonUrl: '#',
    image: sneakerImg,
    ornament: ornamentImg,
    bgColor: '#F9F8FE',
  },
  {
    title: 'Queima de estoque Nike 🔥',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    buttonText: 'Ver Ofertas',
    buttonUrl: '#',
    image: sneakerImg,
    ornament: ornamentImg,
    bgColor: '#F9F8FE',
  },
  {
    title: 'Queima de estoque Nike 🔥',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    buttonText: 'Ver Ofertas',
    buttonUrl: '#',
    image: sneakerImg,
    ornament: ornamentImg,
    bgColor: '#F9F8FE',
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
      <div className="relative h-[500px] md:h-[80vh] min-h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ backgroundColor: slide.bgColor }}
          >
            <div className="flex justify-between items-center h-full w-full px-20">
              {/* Texto */}
              <div className="w-full max-w-xl">
                <p className="text-orange-500 font-semibold mb-2">
                  Melhores ofertas personalizadas
                </p>
                <h2 className="text-5xl font-extrabold mb-4">{slide.title}</h2>
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
                  className="absolute top-5 right-10 w-24 h-24"
                />
                <img
                  src={slide.image}
                  alt="Tênis"
                  className="rotate-[345deg] w-[500px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-20 transition-all"
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-20 transition-all"
        aria-label="Próximo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-pink-600 w-5' : 'bg-pink-300'
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default OutroSlider;