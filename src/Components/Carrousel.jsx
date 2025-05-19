import React from 'react'
import { Carousel } from 'antd'
import '../App.css'
import sneakerImg from '../assets/White-Sneakers-PNG-Clipart 2.png'

const ProductDetails = ({ productId }) => {
  return (

    <div className="w-full h-full flex flex-row items-center justify-center gap-6 p-10">
      <div className='w-[700px] h-[570px] rounded-sm '>
        <Carousel arrows infinite={false} dots={false} >
          <div className='w-full h-full flex items-center justify-center bg-[#E2E3FF]'>
            <img
              src={sneakerImg}
              alt="Tênis"
              className="object-contain w-[400px] h-[400px] mx-auto"
            />
          </div>
          <div className='w-full h-full flex items-center justify-center  bg-[#FFE8BC]'>
            <img
              src={sneakerImg}
              alt="Tênis"
              className="object-contain w-[400px] h-[400px] mx-auto"
            />
          </div>
          <div className='w-full h-full flex items-center justify-center bg-[#FFC0BC]'>
            <img
              src={sneakerImg}
              alt="Tênis"
              className="object-contain w-[400px] h-[400px] mx-auto"
            />
          </div>
          <div className='w-full h-full flex items-center justify-center bg-[#E8DFCF]'>
            <img
              src={sneakerImg}
              alt="Tênis"
              className="object-contain w-[400px] h-[400px] mx-auto"
            />
          </div>
        </Carousel>
      </div>
      <div className='flex w-full'>
         <h1 className="text-2xl font-bold mb-4 bg-amber-500 ">
          Tênis Nike Revolution 6 Next Nature Masculino
        </h1> 
      </div>
      
    </div>
  )
}

export default ProductDetails