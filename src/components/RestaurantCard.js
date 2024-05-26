import { CDN_URL, STAR_SVG } from "../utils/constant.js";

const RestaurantCard = (props) => {
  const { restrauntData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
  } = restrauntData?.info;
  const { slaString } = restrauntData?.info?.sla;
  return (
    <div className="res-card">
      <img
        className="img"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="img"
      />
      <h3 className="res-name">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>

      <div className="rating">
          {STAR_SVG}
        <h4>{avgRating}</h4>
        <h4 className="timing">{slaString}</h4>
      </div>
      <h4 className="costForTwo">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
