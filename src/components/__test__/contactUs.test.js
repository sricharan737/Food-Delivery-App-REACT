import { render } from "@testing-library/react";
import { screen, configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";

describe("Contact Us Test Cases", () => {
	test("Should load contact us component", () => {
		render(<ContactUs />);

		//Query
		const heading = screen.getByRole("heading");

		//Assertion
		expect(heading).toBeInTheDocument();
	});

	test("Should load button inside the the Contact Us Component", () => {
		render(<ContactUs />);

		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();
	});

	test("Should load all input boxes inside the the Contact Us Component", () => {
		render(<ContactUs />);

		const inputBoxes = screen.getAllByRole("textbox");
		expect(inputBoxes.length).toBe(2);
	});
});
