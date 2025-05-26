import React from 'react'
import { useParams } from 'react-router-dom'
import CustomCarousel from '../Components/Carrousel'
import BuyBox from '../Components/BuyBox'

const ProductViewPage = () => {
  const { id } = useParams()
  return (
    <div className="flex gap-4 items-start justify-center">
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
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed \ndo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n enim ad minim veniam, quis nostrud exercitation ullamco."}
        />
      </div>
    </div>
  )
}

export default ProductViewPage
