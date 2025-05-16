import React from 'react'
import { Carousel } from 'antd';


const ProductDetails = () => {
  return (
    <>
      <h1 className ="bg-amber-950 font-bold 2xl:" >Product Details e ola mundo</h1>

      <div className=' w-full flex justify-items-center '>
        <div className=' '>
          <Carousel arrows infinite={false} >
            <div>
              <h3 style={{ Carousel }}>1</h3>
            </div>
            <div>
              <h3 style={{ Carousel }}>2</h3>
            </div>
            <div>
              <h3 style={{ Carousel }}>3</h3>
            </div>
            <div>
              <h3 style={{ Carousel }}>4</h3>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default ProductDetails;

{/* // import React from 'react';
// import { Carousel } from 'antd';
// const contentStyle = {
//   margin: 0,
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };
// const App = () => (
//   <>
//     <Carousel arrows infinite={false}>
//       <div>
//         <h3 style={contentStyle}>1</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>2</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>3</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>4</h3>
//       </div>
//     </Carousel>
//     <br />
//     <Carousel arrows dotPosition="left" infinite={false}>
//       <div>
//         <h3 style={contentStyle}>1</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>2</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>3</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>4</h3>
//       </div>
//     </Carousel>
//   </>
// );
// export default App; */}