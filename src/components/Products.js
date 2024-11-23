import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div className='py-10 font-bold'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-3xl bg-blue-500 text-white py-2 w-[820px] text-center font-bold'>La tienda numero 1 en Funko Pops de Overwatch!</h1>
        <span className='w-20 h-[3px] bg-blue-500'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>
            En la PwipStore, solo encontrarás contenido de alta calidad en terminos de Funko™ Pops™ de Overwatch™!
        </p>
        <p className='max-w-[700px] text-gray-600 text-center'>
            Aventurate™ y encuentra el Funko™ Pop™ de tu personaje favorito! Adentrate y Funko-Poppea™ con nosotros!
        </p>
        </div>
        <div className='max-w-screen-xl mx-auto'>
            <ProductCard/>
        </div>
    </div>
  )
}

export default Products