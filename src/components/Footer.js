import React from 'react'

const Footer = () => {
    const NavBarLinks = ['Support Center', 'Invoicing', 'Contract', 'Careers', 'Blog', 'FAQ,s'];

  return (
    <div className='w-[80%] mx-auto h-[56px] flex justify-between mt-12'>

        {/* logo */}
        <div className='font-volkhov h-full text-3xl text-[#484848] flex items-center font-normal select-none cursor-pointer'>
            FASCO
        </div>

        {/* Navigation buttons */}
        <div className='h-full flex items-center gap-10 leading-tight'>

            {
                NavBarLinks.map((page, index) => {
                    return <div className='relative w-auto cursor-pointer overflow-hidden navButtons text-[#484848]' data-replace={page} key={index}>{page}</div>
                })
            }
        </div>
    </div>
  )
}

export default Footer