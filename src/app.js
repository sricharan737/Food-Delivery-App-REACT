import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import ContactUs from "./components/ContactUs.js";
import Cart from "./components/Cart.js";
import ErrorPage from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
import Shimmer from "./components/Shimmer.js";
import { Provider } from "react-redux";
import {
	createBrowserRouter,
	Outlet,
	RouterProvider,
} from "react-router-dom";
import appStore from "./utils/appStore.js";

//Chunking
//dynamic import and loading
//on demand loading

const Grocery = lazy(() => import("./components/Grocery.js"));

const About = lazy(() => import("./components/About.js"));

const AppLayout = () => {
	const [userName, setUserName] = useState();

	//authentication code
	useEffect(() => {
		const data = {
			name: "Charan",
		};
		setUserName(data.name);
	}, []);

	return (
		<Provider store={appStore}>
			<UserContext.Provider
				value={{ loggedInUser: userName, setUserName }}>
				<div className="app">
					<Header />
					<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: (
					<Suspense fallback={<Shimmer />}>
						<About />
					</Suspense>
				),
			},
			{
				path: "/contact",
				element: <ContactUs />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<Shimmer />}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/cart",
				element: (
					<Suspense fallback={<Shimmer />}>
						<Cart />
					</Suspense>
				)
			},
			{
				path: "/restaurants/:resId",
				element: <RestaurantMenu />,
			},
		],
		errorElement: <ErrorPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
