import React, { useContext } from "react";
import { ProductContext } from "../Context/CardContext";
import { Link } from "react-router-dom";

const ProductCard = ({ limit, className = "" }) => {
  const { products } = useContext(ProductContext);
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className={`bg-[#f6f6fe] pt-12 pb- px-2 ${className}`}>
      <div className="container mx-auto">
        {/* Cards em grid com gap de 10px */}
        <div className={`grid gap-6 ${className}`}>
          {displayedProducts.map(({ id, ...product }) => (
            <Link
              key={product.title}
              to={`/detalhes/${id}`} // Alterado de "/produtos" para incluir o id
              className="flex flex-col items-center cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              {/* Card */}
              <div className="relative bg-white w-[321px] h-[292px] rounded-md flex flex-col">
                <div className="relative bg-white h-[180px] flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[300px] mt-[100px]"
                  />
                  {product.hasDiscount && (
                    <span className="absolute top-2 left-2 bg-lime-200 text-xs text-black font-bold px-2 py-1 rounded-md">
                      30% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Detalhes fora do card */}
              <div className="text-center">
                <p className="text-xs text-gray-500 font-medium">
                  {product.category}
                </p>
                <h3 className="text-sm font-semibold">{product.title}</h3>
                <div className="text-sm">
                  <span className="line-through text-gray-400 mr-1">
                    ${product.originalPrice}
                  </span>
                  <span className="text-black font-bold">
                    ${product.discountPrice}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
