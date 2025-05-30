import React from 'react'
import { useParams } from 'react-router-dom'
import CustomCarousel from '../Components/Carrousel'
import BuyBox from '../Components/BuyBox'
import ProductCard from '../Components/ProductCard'
import Section from '../Components/Section'

const ProductViewPage = () => {
  const { id } = useParams()
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 items-start justify-center w-full">
        <div className="flex-shrink-0">
          <CustomCarousel productId={id} />
        </div>
        <div className="flex-shrink-0">
          <BuyBox
            name={"Tênis Nike Revolution \n6 Next Nature Masculino"}
            reference="Casual | Nike | REF:38416711"
            stars={4.7}
            rating={90}
            price={219.00}
            priceDiscount={199.00}
            description={"Loreem ipsum dolor sit amet, consectetur adipiscing elit, sed \ndo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n enim ad minim veniam, quis nostrud exercitation ullamco."}
          />
        </div>
      </div>
      {/* Cards recomendados */}
       
      <div className="w-full mt-12 mb-0">
      <Section
        title={
          <span style={{ display: 'block', marginLeft: '120px', marginTop:'1000px', fontSize: '24px', fontWeight: 'bold', color: '#474747' }}>
            Coleções em destaque
            </span>
        }
        titleAlign="left"
        >
          <ProductCard 
  limit={4} 
  className="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[10px]" 
/>
        </Section>
      </div>
    </div>
  );
};

export default ProductViewPage
