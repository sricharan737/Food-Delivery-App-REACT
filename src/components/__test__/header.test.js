const { render, screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Header from "../Header.js";
import appStore from "../../utils/appStore.js";
import { BrowserRouter } from "react-router-dom";

it("Should render Header Component with Login button", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

    //Can add more attribute to search like name over the button in this case
    const loginButton = screen.getByRole("button",{name:"Login"});

    expect(loginButton).toBeInTheDocument();

});

it("Should render Header Component with Cart Items", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

   
    const cartButton = screen.getByText(/Cart/);

    expect(cartButton).toBeInTheDocument();

});

it("Should change Login to Logout when it's clicked", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name:"Logout"});

    expect(logoutButton).toBeInTheDocument();


});
