import React from 'react'
import { Carousel } from 'antd';

const ProductDetails = () => {
  return (
    <>
    <h1>Product Details e ola mundo</h1>

    <div className=' h-[160px] bg-[#364d79] center'>
        
        <Carousel autoplay>
    <div>
      <h3 style={{ProductDetails}}>1</h3>
    </div>
    <div>
      <h3 style={{ProductDetails}}>2</h3>
    </div>
    <div>
      <h3 style={{ProductDetails}}>3</h3>
    </div>
    <div>
      <h3 style={{ProductDetails}}>4</h3>
    </div>
  </Carousel>
</div>
</>
  )
}

export default ProductDetails;
