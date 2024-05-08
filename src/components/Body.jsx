import React, { useEffect, useState } from 'react'
import { RestrauntCard } from './RestaurantCard'
import { Shimmer } from './Shimmer';
import { NavLink } from 'react-router-dom';
import { RESTAURANT_CARD_API } from '../constant';
import { filterData } from '../utils/Helper';
import useOnline from '../utils/useOnline';

export const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        // API call
         getRestaurants();
    }, [])

    async function getRestaurants() {
        const data = await fetch(RESTAURANT_CARD_API)
        const json = await data.json();
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        // Optional chaining
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const isOnline = useOnline();

    if(!isOnline){
        return <h1 className='px-20 flex h-96 items-center justify-center text-[30px] text-gray-400'>Opps!, please check your internet connection!!</h1>
    }

    // Conditional Rendering
    // if restaurants is empty = shimmer ui show
    // if restaurants has data = actual data UI show

    //not component render early return
    if(!allRestaurants) return null
    
    // if(filteredRestaurants.length === 0 ) return <h1 className='px-20 pt-5'>Data Not Found</h1>

    return allRestaurants.length === 0  ? ( <Shimmer /> ) : (
        <>
            <div className='ps-20 pt-5'>
                <input
                    type="search" 
                    name="" id="" 
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => {
                        // e.target.value    wherever we want to change and input a value in input field
                        setSearch(e.target.value);
                    }}
                    className='outline-none border border-gray-tartiary p-[10px] text-[16px] font-normal focus:border-primary w-[25%] ' 
                />
                <button 
              
                onClick={() => {
                      //need to filter data
                    const data = filterData(search, allRestaurants)

                    // update the state = restaurant
                    setFilteredRestaurants(data);
                }}
                
                className='p-[10px] px-4 bg-primary border border-primary font-semibold text-white  transition-all duration-300'>Search</button>
            </div>

          
            <div className='flex  px-20 pt-6 grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 w-[100%]'>
                {
                    filteredRestaurants.map((res) => {
                        return <NavLink to={"/restaurant/" + res.info.id }  key={res?.info?.id} ><RestrauntCard  {...res.info} /></NavLink>
                    })
                }
            </div>
            
            
        </>
    )
}

