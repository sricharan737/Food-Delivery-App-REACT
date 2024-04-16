import RestaurantCard, {
	promotedRestaurantCard,
} from "../components/RestaurantCard.js";
import { useState, useEffect, useContext } from "react";
import Shimmer from "../components/Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
	const [restaurantList, setRestaurantList] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState([]);
	const {loggedInUser ,setUserName} = useContext(UserContext);

	const RestaurantCardPromoted =
		promotedRestaurantCard(RestaurantCard);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3950065&lng=78.4345022&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();

		setRestaurantList(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);

		setFilteredRestaurants(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};

	const onlineStatus = useOnlineStatus();

	if (onlineStatus == false) {
		return <h1>Looks like you are offline </h1>;
	}

	//Conditional Rendering
	// if (restaurantList == 0) {

	// 	return <Shimmer />

	// }

	//Using Terenary Operator
	return restaurantList.length == 0 ? (
		<Shimmer />
	) : (
		<div className="Body">
			<div className="filter flex justify-items-center b-2">
				<div className="searchBar mx-2 p-4 ">
					<input
						type="text"
						className="search-box m-2 px-2 py-0.5 border-2 rounded-md"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
						placeholder=" Search..."></input>
					<button
						className="submit-btn px-4 py-1 bg-red-100 rounded-md"
						onClick={() => {
							const filteredRestaurants = restaurantList.filter((x) =>
								x.info.name
									.toLowerCase()
									.includes(searchText.toLowerCase())
							);

							setFilteredRestaurants(filteredRestaurants);
						}}>
						Submit
					</button>
				</div>

				<button
					className="filter-btn b-2 px-4 py-0.5 m-6 bg-red-100 rounded-md"
					onClick={() => {
						setFilteredRestaurants(
							[...restaurantList].sort(
								(x, y) => y.info.avgRating - x.info.avgRating
							)
						);
					}}>
					Filter based on Ratings
				</button>

				<input className="m-2 h-1/2 px-2 py-0.5 border-2 rounded-md" onChange={(x) => {
						value = {loggedInUser}
						setUserName(x.target.value);
				}}>
				</input>
			</div>
			<div className="ResCardsContainer mx-8 flex flex-wrap">
				{filteredRestaurants?.map((x) => (
					<Link key={x.info.id} to={"/restaurants/" + x.info.id}>
						{x.info.isOpen ? (
							<RestaurantCardPromoted restData={x} />
						) : (
							<RestaurantCard restData={x} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
