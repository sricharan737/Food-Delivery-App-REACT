const { render, screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import { promotedRestaurantCard } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"

it("Should render the restaurant card component with props Data", () => {
    render(<RestaurantCard restData = {MOCK_DATA} />)

    const name = screen.getByText("Al Kareem Hotel");

    expect(name).toBeInTheDocument();
});

it("Should render the restaurant card component with promoted label", () => {
    
    
})