export function filterData(search, restaurants){
    return restaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(search.toLowerCase()));
}