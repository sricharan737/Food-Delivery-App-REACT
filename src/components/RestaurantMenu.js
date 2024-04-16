import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
	const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId);

	const [showIndex, setShowIndex] = useState(null);

	if (resInfo == null) return <Shimmer />;

	const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
		resInfo?.cards[2]?.card?.card?.info;


	const categories =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(x) =>
				x?.card?.card?.["@type"] ==
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);
	

	return (
		<div className="Menu flex flex-col items-center">
			<h1 className="text-4xl font-semibold m-2">{name}</h1>
			<img
				className="res-image w-96 m-2 b-2  "
				alt="Restaurant image"
				src={CDN_URL + cloudinaryImageId}></img>
			<h3 className="m-2 text-2xl">{cuisines.join(", ")}</h3>
			<h3 className="m-2 text-2xl">{costForTwoMessage}</h3>
			<h2 className="m-2 pt-8 text-4xl font-semibold">Menu </h2>

			{/*Category accordians */}
			{categories.map((x , index) => (
				<RestaurantCategory
					key={x?.card?.card?.title}
					data={x?.card?.card}
					showItems={index == showIndex ? true : false}
					setShowIndex = {() => setShowIndex(showIndex ? null : index)}
				/>
			))}
		</div>
	);
};

export default RestaurantMenu;
