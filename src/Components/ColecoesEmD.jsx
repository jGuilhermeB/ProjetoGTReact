import React from 'react';
import fonep from '../assets/fonep.png';
import fonepreto from '../assets/fonepreto.png';
import sapatopreto from '../assets/sapatopreto.png';
import starwars from '../assets/star-wars-storm-trooper-supreme-shirts-supreme-t-shirt-snoopy-clothing-apparel-t-shirt-text-transparent-png-616696 1.png';
import calca from '../assets/calca.png';
import blusa from '../assets/blusa.png';
import sapato from '../assets/sapato.png';

const featuredCollections = [
  {
    label: '30% OFF',
    title: 'Novo drop \nSupreme',
    image: starwars,
    button: 'Comprar',
    imgStyle: { right: '-70px', bottom: '-20px', width: '355px', height: '236px' }, // ajuste individual
  },
  {
    label: '30% OFF',
    title: 'Coleção \nAdidas',
    image: sapatopreto,
    button: 'Comprar',
    imgStyle: { right: '-60px', bottom: '-20px', width: '300px', height: '200px' }, // ajuste individual
  },
  {
    label: '30% OFF',
    title: 'Novo \nBeats Bass',
    image: fonepreto,
    button: 'Comprar',
    imgStyle: { right: '-20px', bottom: '0px', width: '250px', height: '180px' }, // ajuste individual
  },
];

const fiveCategories = [
  { image: blusa, label: 'Camisetas' },
  { image: sapato, label: 'Tênis' },
  { image: calca, label: 'Calça' },
  { image: fonep, label: 'Headphones' },
  { image: sapato, label: 'Tênis' },
];

const FeaturedSection = () => {
  return (
    <div className="w-full bg-[#f9f9f9] py-12 flex flex-col items-center gap-10">
      {/* Título acima dos cards principais */}
      <h2 className="text-xl font-semibold text-[#1f1f1f] mb-2">
        Coleções em destaque
      </h2>
      {/* Cards principais */}
      <div className="flex gap-4">
        {featuredCollections.map((item, i) => (
          <div
            key={i}
            className="relative w-[405px] h-[251px] bg-[#e7f1fb] rounded-lg p-4 
            overflow-hidden flex flex-col justify-between shadow"
          >
            {/* Imagem de fundo, camada debaixo */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute right-[-70px] bottom-[-20px] object-contain"
              style={{ ...item.imgStyle, zIndex: 0 }}
            />

            {/* Conteúdo do card acima da imagem */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              {/* Tag de desconto */}
              <span className="text-[14px] font-bold text-[#474747] bg-[#E7FF86] px-2 py-[2px] rounded-4xl w-[80px]
               h-[30px] flex items-center justify-center">
                {item.label}
              </span>

              {/* Título em duas linhas */}
              <div className="mt-2 text-lg font-extrabold text-[#1f1f1f] leading-tight whitespace-pre-line h-[72px] w-[172px]">
                {item.title}
              </div>

              {/* Botão Comprar */}
              <button className="bg-white text-[#d31e6f] font-bold text-sm px-4 py-1 rounded-md h-[48px] w-[153px] whitespace-pre-line 
              transition-colors duration-200 hover:bg-[#e2d7dc] hover:text-white"
                style={{ color: '#d31e6f' }}>
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Título acima das bolas */}
      <h2 className="text-xl font-semibold text-[#1f1f1f] mt-8">
        Coleções em destaque
      </h2>
      {/* 5 BOLAS DAS CATEGORIAS */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-8">
          {fiveCategories.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center
               transition-colors duration-200 hover:bg-[#e7f1fb]">
                <img src={item.image} alt={item.label} className="w-10 h-10 object-contain" />
              </div>
              <span className="text-sm text-[#444]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
