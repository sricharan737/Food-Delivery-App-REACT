import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restData }) => {
	const {
		cloudinaryImageId,
		name,
		avgRating,
		cuisines,
		costForTwo,
		sla,
	} = restData?.info;

	return (
		<div className="res-card m-4 p-4 w-56  bg-slate-200 rounded-md hover:bg-slate-300">
			<img
				className="res-logo rounded-md"
				alt="dish image"
				src={CDN_URL + cloudinaryImageId}></img>
			<div className="Cardtext m-2">
				<h3 className="font-semibold py-2 text-lg">{name}</h3>
				<h4>{cuisines.join(", ")}</h4>
				<h4>{avgRating} stars</h4>
				<h4>{costForTwo}</h4>
				<h4>{sla?.deliveryTime} minutes</h4>
			</div>
		</div>
	);
};

export const promotedRestaurantCard = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label className="absolute m-2 p-2 bg-black text-white rounded-md ">Open</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
