import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from '../Components/Carrousel'

const ProductViewPage = () => {
  const { id } = useParams()
  return (
    <ProductDetails productId={id} />
  )
}
export default ProductViewPage