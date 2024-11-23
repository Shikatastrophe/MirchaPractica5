import React from 'react'
import { PaymentLogo, PwipStoreLogo } from '../assets'
import { BsFillPersonFill, } from "react-icons/bs";
import { FaHome, FaStripe } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-blue-900 text-white py-20 font-titleFont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-3'>
            {/*---LogoIconStart--*/}
            <div className='flex flex-col gap-7'>
                <img className='w-32' src={PwipStoreLogo} alt="" />
                <p className='text-white text-sm tracking-wide'>ReactBD.com</p>
                <img className='w-56' src={PaymentLogo} alt="" />
            </div>
            {/*---LogoIconEnd----*/}
            {/*---LocateUsStart--*/}
            <div className='flex flex-col gap-5'>
                <h2 className='text-2xl font-semibold text-white mb-4'>Localizanos</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p>Frikiplaza, Tercer Piso, Local 502</p>
                    <p>+52 55 0000 2234</p>
                    <p>pwip@store.com</p>
                </div>
            </div>
            {/*---LocateUsEnd----*/}
            {/*---ProfileStart---*/}
            <div className='flex flex-col gap-2'>
                <h2 className='text-2xl font-semibold text-white mb-4'>Perfil</h2>
                <p className='flex items-center gap-3 hover:text-red-400 duration-300 cursor-pointer'>
                    <span>
                        <BsFillPersonFill/>
                    </span> {""}
                    Mi Cuenta
                </p>
                <p className='flex items-center gap-3 hover:text-red-400 duration-300 cursor-pointer'>
                    <span>
                        <FaStripe/>
                    </span> {""}
                    Checkout
                </p>
                <p className='flex items-center gap-3 hover:text-red-400 duration-300 cursor-pointer'>
                    <span>
                        <FaHome/>
                    </span> {""}
                    Seguimiento de Orden
                </p>
                <p className='flex items-center gap-3 hover:text-red-400 duration-300 cursor-pointer'>
                    <span>
                        <FaLocationDot/>
                    </span> {""}
                    Ayuda Y Soporte
                </p>
            </div>
            {/*---ProfileEnd-----*/}
        </div>
    </div>
  )
}

export default Footer