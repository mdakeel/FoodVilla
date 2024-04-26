import React from 'react'
import { IMG_CDN_URL } from '../constant'

export const RestrauntCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) => {
    return(
    <div className='border border-gray-300 p-2 w-full shadow-xl hover:shadow-none transition-all duration-100 cursor-pointer'>
      <div className='flex flex-col items-center w-full '>
        <img className='w-full h-[200px]' src={IMG_CDN_URL + cloudinaryImageId} alt='img'/>
         
         <div className=' w-full pt-2 space-y-2 text-center '>
          <h2 className='text-[18px] font-semibold'>{name}</h2>
          <h3 className='text-[16px] font-medium text-gray-600'>{cuisines?.join(", ")}</h3>
          <h4 className='text-[14px] font-semibold text-gray-600'>{lastMileTravelString} minutes</h4>
         </div>
      </div>
      </div>
    )
}
