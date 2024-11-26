import React from 'react'
import { CartLogo, PwipStoreLogo } from '../assets'

function Header() {
  return (
    <div className='w-full h-20 bg-blue-300 border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
            <div>
                <img className='w-48' src={PwipStoreLogo} alt="LA PWIPSTOREEE"/>
            </div>
            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    <li className='text-base text-black font-bold hover:text-red-400 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
                    <li className='text-base text-black font-bold hover:text-red-400 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
                    <li className='text-base text-black font-bold hover:text-red-400 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
                    <li className='text-base text-black font-bold hover:text-red-400 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
                    <li className='text-base text-black font-bold hover:text-red-400 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
                </ul>
            <div className='relative'>
                <img className='w-12' src={CartLogo} alt="cartImg"/>
                <span className='absolute w-6 top-1 left-5 text-sm flex items-center justify-center font-semibold'>0</span>
            </div>
            <img className='w-10 h-10 rounded-full' src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto-compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="UserLogo"/>
            </div>
        </div>
    </div>
  )
}

export default Header