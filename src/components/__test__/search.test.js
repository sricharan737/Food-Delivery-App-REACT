import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MOCK_DATA);
		},
	});
});

it("Should render the Body Component with Search", async () => {
	await act(async () => {
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		);
	});

    const searchBar = screen.getByTestId("searchbox");

    const searchBtn = screen.getByTestId("searchbutton");   
    
    const resCardsBeforeSearch = screen.getAllByTestId("resCard");
    
    expect(resCardsBeforeSearch.length).toBe(9);

    fireEvent.change(searchBar, {target: {value:"Bites"}});

    fireEvent.click(searchBtn);

    const resCards = screen.getAllByTestId("resCard");
    expect(resCards.length).toBe(1);
});
