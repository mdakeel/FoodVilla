import React from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL} from '../constant'
import { Shimmer } from './Shimmer'
import useRestaurant from '../utils/useRestaurant'
import { addItem } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'

export const RestaurantCardDetails = () => {
   const { id } = useParams();
   const restaurant = useRestaurant(id);  
   
   const dispatch = useDispatch();

   const handleAddItem = (item) => {
    dispatch(addItem(item))
   }

  return !restaurant ? (<Shimmer /> ) : (
    <div className='px-20 pt-10'>
     <h1 className='text-[30px] font-extrabold'>Restaurant Card Details</h1>
        <div className='flex  items-center w-[40%] mt-8 mb-8 border border-gray-300  w-[35%] shadow-xl max-h-[300px] min-h-[300px] hover:shadow-none transition-all duration-100 cursor-pointer '>
        
           
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} className='w-[300px] h-[300px] p-2' alt="" />
        <div className=' w-full pt-2 space-y-2 text-center '>
        <h1 className='text-[15px] font-medium text-gray-600'>{restaurant?.name}</h1>
        <h3>{restaurant?.areaName}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
        <h3>{restaurant?.cuisines?.join(", ")}</h3>
        <button onClick={() => handleAddItem(restaurant) }className='outline-none border border-gray-500 rounded-md py-2 font-bold px-4 text-sm text-white shadow-lg hover:shadow-none hover:bg-white hover:text-black bg-primary '>Add to Cart</button>
        </div>
        </div>
    </div>
  )
}
