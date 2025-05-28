import React, { useContext } from "react";
import { ProductContext } from "../context/CardContext";

const ProductCard = ({ limit, className = "" }) => {
  const { products } = useContext(ProductContext);
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className={`bg-[#f6f6fe] pt-12 pb- px-2 ${className}`}>
      <div className="container mx-auto">
        {/* Cards em grid 4 colunas */}
        <div className="grid grid-cols-4 m:grid-cols-4 md:grid-cols-4 gap-10 justify-items-center">
          {displayedProducts.map(({id,...product}) => (
            <div key={product.title} className="flex flex-col items-center">
              {/* Card */}
              <div className="relative bg-white w-[321px] h-[292px] rounded-md flex flex-col">
                <div className="relative bg-white h-[180px] flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[300px] mt-[100px] "
                  />
                  {product.hasDiscount && (
                    <span className="absolute top-2 left-2 bg-lime-200 text-xs text-black font-bold px-2 py-1 rounded-md">
                      30% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Detalhes fora do card */}
              <div className="text-center mt-2">
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
