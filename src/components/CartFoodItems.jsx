import React from 'react'
import { IMG_CDN_URL } from '../constant'
import { useDispatch } from 'react-redux'
import { removeItem } from '../utils/cartSlice'

export const CartFoodItems = ({name, discription, cloudinaryImageId, price}) => {

    const dispatch = useDispatch()

    // const handleRemoveItem = () => {
    //     dispatch(removeItem())
    // }

    return(
    <div className='border overflow-y-hidden border-gray-300 p-2 w-full   hover:shadow-none transition-all duration-100 cursor-pointer'>
      <div className='flex flex-row items-center justify-between w-full h-fit px-'>
        <img className='w-[60px] h-[50px]' src={IMG_CDN_URL + cloudinaryImageId} alt='img'/>
         
         <div className=' flex items-center  pt-2 space-x-4 text-center '>
          <h2 className='text-[16px] font-semibold'>{name}</h2>
          <p>Rupees : $5 {price}</p>
         </div>
         <button  className='border border-gray-500 rounded-md py-1 text-blue-600 px-4 text-sm hover:bg-gray-100'>Remove</button>
      </div>
      </div>
    )
}
