import React from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../Components/Carrousel'

const ProductViewPage = () => {
  const { id } = useParams()
  return (
    <CustomCarousel productId={id} />
  )
}
export default ProductViewPage