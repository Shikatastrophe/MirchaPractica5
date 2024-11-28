import React, { useEffect, useState } from 'react'
import { MdOutlineStar } from 'react-icons/md';
import { useLocation } from 'react-router-dom'

const Product = () => {
    const [details, setDetails] = useState({});
    const Location = useLocation()
    useEffect(()=>{
        setDetails(Location.state.item);

    },[])
  return (
    <div>
        <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
            <div className='w-2/5 relative'>
                <img className='w-full h-[550px] object-cover' src={details.image} alt="productImg" />
                <div>
                    {details.isNew && (
                        <p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>Sale</p>
                    )};
                </div>
            </div>
            <div className='w-3/5 flex-col justify-center gap-12'>
            <div>
                <h2 className='text-4xl font-semibold'>{details.title}</h2>
                <div className='flex items-center gap-4 mt-3'>
                <p className='line-through text-gray-500'>${details.oldPrice}</p>
                <p className='font-semibold'>${details.price}</p>
                </div>
            </div>
            <div className='flex items-center gap-2 text-base'>
               <div className='flex'>
               <MdOutlineStar/>
                <MdOutlineStar/>
                <MdOutlineStar/>
                <MdOutlineStar/>
                <MdOutlineStar/>
               </div>
               <p className='text-xs text-gray-500'>(1 Customer review)</p>
            </div>
            <p className='text-base text-gray-500 mt-3'>{details.description}</p>
            <div>
                <div>
                    <p className='text-sm'>Quantity</p>
                    <button>-</button>
                    <span>{1}</span>
                    <button>+</button>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Product