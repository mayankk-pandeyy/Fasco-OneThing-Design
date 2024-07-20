import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Brands from './Brands'
import Deals from './Deals'
import NewArrivals from './NewArrivals'
import Product from './Product'
import Facts from './Facts'
import Follow from './Follow'
import Reviews from './Reviews'
import Subscribe from './Subscribe'
import Footer from './Footer'
import Copyright from './Copyright'

const Home = () => {
  return (
    <div className='w-full h-[500px]'>
        <div className='w-[70%] mx-auto'>
          <Navbar/>
          {/* Hero Section */}
          <Hero/>
          <Brands/>

          {/* Deals */}
          <Deals/>

          {/* New Arrivals */}
          <NewArrivals/>
        </div>

        {/* Product */}
        <div className='w-[100vw] mt-16 bg-[#DADADA]'>
          <Product/>
        </div>

        <Facts/>
        <Follow/>
        <div className='w-full h-[600px] bg-[#FAFAFA]'>
          <Reviews/>
        </div>
        <Subscribe/>

        <Footer/>
        <Copyright/>

    </div>
  )
}

export default Home