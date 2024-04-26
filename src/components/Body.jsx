import React, { useEffect, useState } from 'react'
import { restaurantList } from '../constant'
import { RestrauntCard } from './RestaurantCard'

function filterData(search, restaurants){
    return restaurants.filter((restaurant) => restaurant.data.name.includes(search));
}

export const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [search, setSearch] = useState("");

    useEffect(() => {
        // API call
         getRestaurants();
    }, [])

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0])
        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return (
        <>
            <div className='ps-20 pt-4'>
                <input
                    type="search" 
                    name="" id="" 
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => {
                        // e.target.value    wherever we want to change and input a value in input field
                        setSearch(e.target.value);
                    }}
                    className='outline-none border border-gray-tartiary p-[10px] text-[16px] font-normal focus:border-primary w-[30%] ' 
                />
                <button 
              
                onClick={() => {
                      //need to filter data
                    const data = filterData(search, restaurants)

                    // update the state = restaurant
                    setRestaurants(data);
                }}
                
                className='p-[10px] px-4 bg-primary border border-primary font-semibold text-white  transition-all duration-300'>Search</button>
            </div>


            <div className='flex  px-20 pt-6 grid grid-cols-5 gap-6 w-[100%]'>
                {
                    restaurants.map((res) => {
                        return <RestrauntCard key={res?.info?.id} {...res.info} />
                    })
                }
            </div>
        </>
    )
}

