import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resMenuMock.json";
import appStore from "../../utils/appStore.js";
import Header from "../Header.js";
import Cart from "../Cart.js"

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => Promise.resolve(MOCK_DATA),
	});
});

it("Should load the restaurant menu component", async () => {
	await act(async () => {
		render(
			<Provider store = {appStore}>
				<BrowserRouter>
                    <Header />
					<RestaurantMenu />
                    <Cart />
				</BrowserRouter>
			</Provider>
		);
	});

	const accordianHeader = screen.getByText("Premium Thalis (3)");

    fireEvent.click(accordianHeader);

    expect( screen.getAllByTestId("fooditems").length).toBe(3);

    const addBtns = screen.getAllByTestId("addbtn");

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart: 1 items")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart: 2 items")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button",{name: "Clear Cart"}));

    expect(screen.getAllByTestId("fooditems").length).toBe(3);

});
