import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from '../Components/Carrousel'

const ProductListingPage = () => {
  const { id } = useParams()

  return (
    <div>
      <ProductDetails productId={id} />
    </div>
  )
}



export default ProductListingPage