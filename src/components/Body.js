import RestaurantCard from "../components/RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer.js";

const Body = () => {
	const [restaurantList, setRestaurantList] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();

		setRestaurantList(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);

		setFilteredRestaurants(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);


	};

	//Conditional Rendering
	// if (restaurantList == 0) {

	// 	return <Shimmer />

	// }

	//Using Terenary Operator
	return restaurantList.length === 0 ? (
		<Shimmer />
	) : (
		<div className="Body">
			<div className="filter">
				<div className="searchBar">
					<input
						type="text"
						className="search-box"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
						placeholder="Search..."></input>
					<button
						className="submit-btn"
						onClick={() => {
							const filteredRestaurants = restaurantList.filter((x) =>
								x.info.name
									.toLowerCase()
									.includes(searchText.toLowerCase())
							);

							setFilteredRestaurants(filteredRestaurants)
						}}>
						Submit
					</button>
				</div>

				<button
					className="filter-btn"
					onClick={() => {
						setRestaurantList(
							[...restaurantList].sort(
								(x, y) => y.info.avgRating - x.info.avgRating
							)
						);
					}}>
					Filter based on Ratings
				</button>
			</div>
			<div className="ResCardsContainer">
				{filteredRestaurants?.map((x) => (
					<RestaurantCard key={x.info.id} restData={x} />
				))}
			</div>
		</div>
	);
};

export default Body;