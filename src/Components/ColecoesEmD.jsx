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
    title: 'Supreme Shirt',
    image: starwars, // camisa da Supreme primeiro
    button: 'Comprar',
  },
  {
    label: '30% OFF',
    title: 'Tênis Preto',
    image: sapatopreto, // sapatopreto em segundo
    button: 'Comprar',
  },
  {
    label: '30% OFF',
    title: 'Fone Supreme',
    image: fonepreto, // fone em terceiro
    button: 'Comprar',
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
      // div que estiliza os cards
      className="relative w-[300px] h-[160px] bg-[#e7f1fb] rounded-lg p-4 overflow-hidden flex flex-col justify-between shadow"
    >
      {/* Tag de desconto */}
      <span className="text-[10px] font-semibold text-[#b5f30c] bg-[#f0ffd6] px-2 py-[2px] rounded-md w-fit">
        {item.label}
      </span>

      {/* Título em duas linhas */}
      <div className="mt-2 text-lg font-extrabold text-[#1f1f1f] leading-tight">
        {item.title}
      </div>

      {/* Botão Comprar */}
      <button className="mt-3 bg-white text-[#d31e6f] font-bold text-sm px-4 py-1 rounded-md w-[150px] h-[35px] ">
        {item.button}
      </button>

      {/* Imagem: canto inferior direito, fora do card */}
      <img
        src={item.image}
        alt={item.title}
        className="absolute right-[-50px] bottom-0 w-[200px] h-[110px] object-contain"
      />
    </div>
  ))}
</div>

   
    </div>
  );
};

export default FeaturedSection;
