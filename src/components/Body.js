import RestaurantCard from "./RestaurantCard.js";
import restaurantList from "../utils/mockData.js";
import { useState } from "react";

const Body = () => {
  // local state variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  //Normal Js variable
  // let listOfRestaurant2 = [
  //   {
  //     info: {
  //       id: "25945",
  //       name: "KFC",
  //       cloudinaryImageId: "f986df6f1a1fcf2ff24d2eaf44d570a7",
  //       deliveryTime: "26-36 mins",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
  //       avgRating: 4.5,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "259458",
  //       name: "Oven Story Pizza",
  //       cloudinaryImageId: "f986df6f1a1fcf2ff24d2eaf44d570a7",
  //       deliveryTime: "26-36 mins",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
  //       avgRating: 4,
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurants(filteredList)
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {/* <ReataurantCard restrauntData={restaurantList[8]} /> */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restrauntData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
