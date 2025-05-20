import React from 'react'

const ShowThumbs = (ProductId) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-10">
       {/* <div className='flex w-full'>
         <h1 className="text-2xl font-bold mb-4 bg-amber-500 flex-col ">
          Tênis Nike Revolution 6 Next Nature Masculino
        </h1> 
      </div> */}
      <div className='w-[700px] h-[570px] rounded-sm '>
        <ShowThumbs >
          <div className='w-full h-full flex items-center justify-center bg-[#E2E3FF]'>
            <img src={sneakerImg} alt="Tênis"
              className=" w-[400px] h-[400px] mx-auto rounded-bl-sm"
            />
          </div>
          <div className='w-full h-full flex items-center justify-center  bg-[#FFE8BC]'>
            <img
              src={sneakerImg}
              alt="Tênis"
              className=" w-[400px] h-[400px] mx-auto rounded-bl-sm"
            />
          </div>
          <div className='w-full h-full flex items-center justify-center bg-[#FFC0BC]'>
            <img
              src={sneakerImg}
              alt="Tênis"
              className=" w-[400px] h-[400px] mx-auto rounded-bl-sm"
            />
          </div>
          <div className='w-full h-full flex items-center justify-center bg-[#E8DFCF]'>
            <img
              src={sneakerImg}
              alt="Tênis"
              className=" w-[400px] h-[400px] mx-auto rounded-bl-sm"
            />
          </div>
        </ShowThumbs>
      </div>
     
      
    </div>
  )
}

export default ShowThumbs
