import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import {useParams} from "react-router-dom";
import { MENU_URL } from "../utils/constants";


const RestaurantMenu = () => {
	const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();    

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(
			MENU_URL+resId
		);
		const json = await data.json();
		setResInfo(json.data);
	};

	if (resInfo == null) return <Shimmer />;

	const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
		resInfo?.cards[2]?.card?.card?.info;

	const { itemCards } =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
			?.card?.card;

	return (
		<div className="Menu">
			<h1>{name}</h1>
			<img
				className="res-image"
				alt="Restaurant image"
				src={CDN_URL + cloudinaryImageId}></img>
			<h3>{cuisines.join(", ")}</h3>
			<h3>{costForTwoMessage}</h3>
			<h2>
				Menu </h2>
				<ul>
					{itemCards.map((x) => (
						<li key = {x?.card?.info?.id}> {x?.card?.info?.name} - Rs {x?.card?.info?.price/100}</li>
					))}
				</ul>
			
		</div>
	);
};

export default RestaurantMenu;
