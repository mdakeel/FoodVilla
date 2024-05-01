import React from 'react'
import { IMG_CDN_URL } from '../constant'

export const RestrauntCard = ({name, cuisines, cloudinaryImageId, avgRating}) => {
    return(
    <div className='border border-gray-300 p-2 w-full shadow-xl max-h-[300px] min-h-[300px] hover:shadow-none transition-all duration-100 cursor-pointer'>
      <div className='flex flex-col items-center w-full '>
        <img className='w-full h-[150px]' src={IMG_CDN_URL + cloudinaryImageId} alt='img'/>
         
         <div className=' w-full pt-2 space-y-1 text-center '>
          <h2 className='text-[16px] font-semibold'>{name}</h2>
          <h3 className='text-[15px] font-medium text-gray-600'>{cuisines?.join(", ")}</h3>
          <h4 className='text-[14px] font-semibold text-gray-600'>{avgRating} star</h4>
         </div>
      </div>
      </div>
    )
}
