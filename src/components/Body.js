import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
   setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
if (listOfRestaurants.length === 0) {
 return <Shimmer />
}

  return (
    <div className="container body">
      <div >
        <button className="filter-btn"
          onClick={() => {
            const filterLogic = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            setListOfRestaurants(filterLogic);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="restaurant-container">

        {listOfRestaurants.map((restaurant) => (
          console.log(restaurant),
          <RestaurantCard key={restaurant.info.id} restrauntData={restaurant} />
        ))}
        
      </div>
    </div>
  );
};

export default Body;
