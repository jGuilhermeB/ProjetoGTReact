import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useParams } from 'react-router-dom';

import CustomCarousel from '../Components/Carrousel';
import '../App.css';

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  const sizes = [39, 40, 41, 42, 43];
  const colorOptions = ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'];

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <div className="w-[700px] h-[570px] rounded-lg flex flex-col gap-4 text-[#1F1F1F] p-6 bg-transparent mt-12">
      {/* Título */}


      <h1  className="buyboxtitle whitespace-pre-line " >
        {name}
        </h1>
      
      {/* Categoria e código */}
      <p className="Text X-Small Bold text-[#666666] Text X-Small Bold "> {reference}</p>

      {/* Estrelas e avaliação */}
      <div className="flex items-center gap-2 text-[16 px] Text X-Small Bold">
        {/* Estrelas primeiro */}
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map(i => (
            <Star
              key={i}
              size={16}
              fill={i <= 4 ? '#F6AA1C' : 'none'} //if para as estrelas
              stroke="#F6AA1C" // borda preta
            />
          ))}
        </div>
        {/* Valor na caixa amarela  */}
        <span className="Text X-Small Bold text-white bg-[#F6AA1C] rounded px-2 py-0.5">
          {stars}
        </span>
        <span className="text-[#8F8F8F]">{rating} (avaliações)</span>
      </div>
 
      {/* Preço */}
      <div className="flex items-end gap-2">
        {priceDiscount ? (
          <>
            <span className="text-[32px] Text X-Small Bold text-[#474747] ">
              R$ {priceDiscount?.toFixed(2).replace('.', ',')}
            </span>
            <span className="line-through text-[20px] text-[#CCCCCC] Text X-Small Bold">
              R$ {price?.toFixed(2).replace('.', ',')}
            </span>
          </>
        ) : (
          <span className="text-2xl Text X-Small Bold text-[#1F1F1F]">
            R$ {price}
          </span>
        )}
      </div>

      {/* Descrição */}
      <div>
        <h2 className="Text X-Small Bold text-[#8F8F8F] text-[16px] mb-1 font-inter">
          Descrição do produto
        </h2>
        <p className="text-[14px] text-[#474747] whitespace-pre-line font-inter">{description}</p>
      </div>

      {/* Tamanhos */}
      <div>
        <h3 className="Text X-Small Bold text-[#8F8F8F] text-[16px] mb-1 font-inter">Tamanho</h3>
        <div className="flex gap-2">
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-10 h-10 border rounded-b-lg flex items-center justify-center font-bold text-sm 
                ${selectedSize === size ? 'border-[#C92071] bg-[#C92071] text-white!' : 'border-gray-300 bg-white'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Cores */}
      <div>
        <h3 className="font-bold text-[#8F8F8F] text-[16px] mb-1 font-inter">Tamanho</h3>
        <div className="flex gap-3">
          {colorOptions.map((color, i) => (
            <button
              key={i}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center 
                ${selectedColor === color ? 'border-[#C92071]' : 'border-transparent'}`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Children: opções de variação */}
      <div className="mt-2">{children}</div>

      {/* Botão de compra */}
      <button className="mt-auto w-[220px] bg-[#F6AA1C] hover:bg-[#e59b12] text-white! py-3 font-bold rounded text-lg">
        COMPRAR
      </button>
    </div>
  );
};

const ProductViewPage = () => {
  const { id } = useParams();
  return (
    <div className="flex gap-8">
      <CustomCarousel productId={id} />
      <BuyBox
        name="Tênis Nike Revolution 6 Next Nature Masculino"
        reference="38416711"
        stars={4.7}
        rating={90}
        price={219.0}
        priceDiscount={199.0}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
      >
        
      </BuyBox>
    </div>
  );
};

export default BuyBox
