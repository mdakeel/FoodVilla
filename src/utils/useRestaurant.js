import { useEffect, useState } from "react";
import { RESTAURANT_CARD_DETAILS_API } from "../constant";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null);

    // Get data from API
    useEffect(() => {
        getRestaurantInfo();
       }, [])

       async function getRestaurantInfo() {
        try {
            const data = await fetch(RESTAURANT_CARD_DETAILS_API + id);
            const json = await data.json();
            console.log(json); // Check the structure of the response
            setRestaurant(json?.data?.cards[2]?.card?.card?.info);
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
            // Optionally, set an error state here if needed
        }
        
       }

    //   return restaurant data
    return restaurant;
}

export default useRestaurant;