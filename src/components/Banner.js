import React, { useState } from 'react'
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { Banner1 } from '../assets';


const Banner = () => {
    const [currentSlide, setCurrentSlide]= useState(0)
    const data = [
        Banner1,
        "https://m.media-amazon.com/images/I/712jWw3soWL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/712cOajJSRL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/51SUpzj8JuL._SX3000_.jpg",
    ];

    const prevSlide=()=>{
        setCurrentSlide(currentSlide === 0?3:(prev)=>prev-1)
    }
    const nextSlide=()=>{
        setCurrentSlide(currentSlide === 3?0:(prev)=>prev+1)
    }
  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[650px] relative'>
            <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
                <img className='w-screen h-full object-cover' src={data[0]} alt="0" loading='priority' />
                <img className='w-screen h-full object-cover' src={data[1]} alt="0" loading='priority' />
                <img className='w-screen h-full object-cover' src={data[2]} alt="0" loading='priority' />
                <img className='w-screen h-full object-cover' src={data[3]} alt="0" loading='priority' />
            </div>
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-blue-500 flex items-center justify-center hover:cursor-pointer hover:bg-blue-400 hover:text-red-400 active:bg-blue-800 dur'><HiArrowLeft/></div>
                <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-blue-500 flex items-center justify-center hover:cursor-pointer hover:bg-blue-400 hover:text-red-400 active:bg-blue-800 dur'><HiArrowRight/></div>
            </div>
        </div>
    </div>
  )
}

export default Banner