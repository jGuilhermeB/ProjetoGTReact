import React, { useContext } from "react";
import { ProductContext } from "../Context/CardContext";


const ProductCard = ({ limit, className = "" }) => {
  const products = useContext(ProductContext);
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className={`bg-[#f6f6fe] pt-12 pb-0 px-6 ${className}`}>
      <div className="container mx-auto">
        {/* Cards em grid 4 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white w-[320px] h-[380px] rounded-md overflow-hidden shadow-sm flex flex-col"
            >
              <div className="relative bg-white h-[180px] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-28 object-contain"
                />
                {product.hasDiscount && (
                  <span className="absolute top-2 left-2 bg-lime-200 text-xs text-black font-bold px-2 py-1 rounded-md">
                    30% OFF
                  </span>
                )}
              </div>
              <div className="p-4 text-center flex-1 flex flex-col justify-center">
                <p className="text-xs text-gray-500 font-medium">{product.category}</p>
                <h3 className="text-sm font-semibold mt-1">{product.title}</h3>
                <div className="text-sm mt-2">
                  <span className="line-through text-gray-400 mr-1">
                    ${product.originalPrice}
                  </span>
                  <span className="text-black font-bold">
                    ${product.discountPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
