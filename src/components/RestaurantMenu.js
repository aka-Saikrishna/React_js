
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_CDN_URL } from "../utils/constant.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId)
  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    restaurantInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="items-card">
      <div className="items-card-details">
        <h1>{name}</h1>
        <h3>🔵{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <div>
          <img src={CDN_URL + cloudinaryImageId} />
        </div>
        <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - 
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
              <img
          src={MENU_CDN_URL + item?.card?.info?.imageId}
          alt={item?.card?.info?.name}
        />
            </li>
          ))}
        </ul>
 
      </div>
    </div>
  );
};

export default RestaurantMenu;
