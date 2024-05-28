import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constant.js";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  
  const {resId} = useParams()
  


  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId );
    const json = await data.json();
    console.log(json);
    setRestaurantInfo(json.data);
  };
  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  return (
    <div className="items-card">
      <div className="items-card-details">
      <h1>{name}</h1>
      <h3>🔵{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((item ) =>( 
        <li key={item?.card?.info?.id}>{item?.card?.info?.name}-{(item?.card?.info?.price)/100 || (item?.card?.info?.defaultPrice)/100}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default RestaurantMenu;
