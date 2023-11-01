import React from 'react'
import elestar from '../assets/ele1.png'
import Cards from './Cards'

const Collections = () => {
  return (
    <div>
        <div>
            <div className='flex justify-center'>
                <img src={elestar} alt='' className='w-[10px] md:w-auto '/>
            </div>
            <div className='flex justify-center text-[#875A33] md:text-[38px] md:mb-[24px] mb-[8px]' >
                <span>Best Collections</span>
            </div>
            <div className='flex flex-row space-between md:gap-[32px] gap-[11px] justify-center'>
                <div>
                    <Cards/>
                </div>
                <div>
                    <Cards/>
                </div>
                <div>
                    <Cards/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collections