import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
	const [buttonName, setButtonName] = useState("Login");
	const { loggedInUser } = useContext(UserContext);

	//Subscribing to the store using selector
	const cartItems = useSelector((store) => store.cart.items);

	return (
		<div className="flex justify-between bg-slate-200 shadow-md mb-4">
			<div className="w-36">
				<img src={LOGO_URL}></img>
			</div>
			<div className="flex items-center font-semibold text-xl">
				<ul className="flex">
					<li className="px-4">
						<Link to="/">Home</Link>
					</li>
					<li className="px-4">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="px-4">
						<Link to="/about">About Us</Link>
					</li>
					<li className="px-4">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="px-4">
						<Link to="/cart"> Cart: {cartItems.length} items </Link>
					</li>
					<button
						className="px-4"
						onClick={() => {
							buttonName === "Login"
								? setButtonName("Logout")
								: setButtonName("Login");
						}}>
						{buttonName}
					</button>
					<li className="px-4">{loggedInUser}</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
