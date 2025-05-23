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
</div>
  );
};

export default FeaturedSection;
