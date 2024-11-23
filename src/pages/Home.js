import React from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-blue-100'>
        <Banner/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home