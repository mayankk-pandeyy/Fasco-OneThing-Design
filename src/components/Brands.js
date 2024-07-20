import React from 'react'
import chanel from "../assets/chanel.svg"
import louis from "../assets/louis.svg"
import prada from "../assets/prada.svg"
import calvin from "../assets/calvin.svg"
import denim from "../assets/denim.svg"

const Brands = () => {
  return (
    <div className='w-full flex items-center justify-between mt-16'>
        <div>
            <img src={chanel} className='w-40'/>
        </div>

        <div>
            <img src={louis} className='w-40'/>
        </div>

        <div>
            <img src={prada} className='w-40'/>
        </div>

        <div>
            <img src={calvin} className='w-40'/>
        </div>

        <div>
            <img src={denim} className='w-40'/>
        </div>
    </div>
  )
}

export default Brands