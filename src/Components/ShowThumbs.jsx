import React from 'react'
import sneakerImg from '../assets/White-Sneakers-PNG-Clipart 2.png'
import Section from './Section'

// const MiniCards = () => {
//   return (
//     <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-10">

//       <ShowThumbs />
//     </div>
//   )
// }

const ShowThumbs = ({ selected, onSelect }) => {
  const thumbs = [
    { bg: '#E2E3FF' },
    { bg: '#FFE8BC' },
    { bg: '#FFC0BC' },
    { bg: '#DEC699' },
    { bg: '#E8DFCF' }
  ]

  return (
    <div className="flex gap-4 mt-4 justify-center">
      
      {thumbs.map((thumb, idx) => (
        <div
          key={idx}
          className={`w-[117px] h-[95px] rounded-sm flex items-center justify-center cursor-pointer border-2 ${selected === idx ? 'border-[#C92071]' : 'border-transparent'}`}
          style={{ background: thumb.bg }}
          onClick={() => onSelect(idx)}
        >
          <img
            src={sneakerImg}
            alt="Tênis"
            className="object-contain w-[90px] h-[70px]"
          />
        </div>
        
      ))}
    
    </div>
    
  )
}

export default ShowThumbs
