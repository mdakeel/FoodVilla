import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL, RESTAURANT_CARD_DETAILS_API } from '../constant'
import { Shimmer } from './Shimmer'

export const RestaurantCardDetails = () => {
    const {id} = useParams()
    const [restaurantCardDetails, setRestaurantCardDetails] = useState()

   useEffect(() => {
    getRestaurantDetails();
   }, [])
   const getRestaurantDetails = async () => {
    const data = await fetch(RESTAURANT_CARD_DETAILS_API + id );
    const json = await data.json();
    setRestaurantCardDetails(json?.data?.cards[2]?.card?.card?.info)
    console.log(json?.data?.cards[2]?.card?.card?.info)
   }

  return !restaurantCardDetails ? (<Shimmer /> ) : (
    <div className='px-20 pt-10'>
     <h1 className='text-[30px] font-extrabold'>Restaurant Card Details</h1>
        <div className='flex  items-center w-full mt-8 mb-8 border border-gray-300 px-20 w-[50%] shadow-xl max-h-[300px] min-h-[300px] hover:shadow-none transition-all duration-100 cursor-pointer '>
        
           
        <img src={IMG_CDN_URL + restaurantCardDetails.cloudinaryImageId} className='w-[300px] h-[200px]' alt="" />
        <div className=' w-full pt-2 space-y-1 text-center '>
        <h1 className='text-[15px] font-medium text-gray-600'>{restaurantCardDetails?.name}</h1>
        <h3>{restaurantCardDetails?.areaName}</h3>
        <h3>{restaurantCardDetails?.city}</h3>
        <h3>{restaurantCardDetails?.avgRating}</h3>
        <h3>{restaurantCardDetails?.costForTwoMsg}</h3>
        <h3>{restaurantCardDetails?.cuisines?.join(", ")}</h3>
        </div>
        </div>
    </div>
  )
}
