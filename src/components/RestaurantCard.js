import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({restData}) => {
  
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
    } = restData?.info;
    
return (  
    
    <div className="res-card">
        <img 
        className="res-logo"
        alt = "dish image"
        src={CDN_URL + cloudinaryImageId}>
        </img>
        <div className="Cardtext">
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{restData.info.sla.deliveryTime} minutes</h4>
        </div>
    </div>
) }

export default RestaurantCard;