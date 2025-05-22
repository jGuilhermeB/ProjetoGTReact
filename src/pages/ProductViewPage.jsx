import React from 'react'
import { useParams } from 'react-router-dom'
import CustomCarousel from '../Components/Carrousel'
import BuyBox from '../Components/BuyBox'

const ProductViewPage = () => {
  const { id } = useParams()
  return (
    <div className="flex gap-8 items-start justify-center">
      <div className="flex-shrink-0">
        <CustomCarousel productId={id} />
      </div>
      <div className="flex-shrink-0">
        <BuyBox
          name="Tênis Nike Revolution 6 Next Nature Masculino"
          reference="38416711"
          stars={4.7}
          rating={90}
          price={219.00}
          priceDiscount={199.00}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        />
      </div>
    </div>
  )
}

export default ProductViewPage
