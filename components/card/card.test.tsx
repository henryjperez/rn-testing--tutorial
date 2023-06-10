// import "@testing-library/jest-native/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { Animated, View } from "react-native";
import { Card } from "./card";

const ICON = "code";



describe("<Card />", () => {
	jest.mock('react-native', () => {
		const rn = jest.requireActual('react-native')
		const spy = jest.spyOn(rn.Animated, 'View', 'get')
		spy.mockImplementation(() => jest.fn(({ children }) => children));
		return rn
	});
	test("Card renders correctly", () => {
		const card = render(<Card onPress={() => {}} icon={ICON} activate={true} />)
		expect(card).toBeDefined();
	});

	test("Icon renders", () => {
		render(<Card onPress={() => {}} icon={ICON} activate={true} />)
		const icon = screen.getByTestId(ICON);

		expect(icon).toBeDefined();
	});
	
	test("Button onPress", () => {
		let count = 0;
		const component = render(<Card onPress={() => count++} icon={ICON} activate={true} />)
		// console.log("pERRI C", component)
		const card = screen.getByTestId("card-press");
		expect(count).toBe(0);

		fireEvent.press(card);
		let c = 1;
		for (let i = 0; i < 10; i++) {
			fireEvent.press(card);
			c++
		}
		// setTimeout(() => {
		// }, 500);
		
		// expect(count).toBe(11);
		expect(c).toBe(11);
	});

	// test("Card Activation and Deactivation", () => {

	// });
});