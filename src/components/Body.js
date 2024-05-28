import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredReataurants, setFilteredReataurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => { 
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredReataurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    )
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
              setFilteredReataurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterLogic = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            setFilteredReataurants(filterLogic);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredReataurants.map((restaurant) => (
        <Link className="link" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>  
        <RestaurantCard  restrauntData={restaurant} /> 
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
