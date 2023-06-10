import "@testing-library/jest-native/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { View, Text } from "react-native";
import { Button } from "./button";

type Rendered = ReturnType<typeof render>;

describe("<Button />", () => {

	test("It renders correctly", () => {
		let component = render(<Button children={"Testing Button"} onPress={() => 100} />);

		expect(component).toBeDefined();

		const node = screen.getByTestId("base-button");
		expect(node).toHaveTextContent("Testing Button");
	});

	test("Children nested text", () => {
		render(<Button onPress={() => {}}>Button Text Jest</Button>);
		const node = screen.getByTestId("base-button");

		expect(node).toHaveTextContent("Button Text Jest");
	});

	test("Component Children", () => {
		const Child = () => {
			return (
				<View testID="child-view">
					<Text>
						Another World
					</Text>
				</View>
			)
		};
		render(<Button onPress={() => { }}><Child /></Button>);

		const node = screen.getByTestId("base-button");
		const viewChild = screen.getByTestId("child-view");

		expect(viewChild).toBeDefined();
		expect(node).toHaveTextContent("Another World");
	});

	test("Button on Press", () => {
		let count = 0;
		render(<Button onPress={() => count++}>Press Button</Button>);

		fireEvent.press(screen.getByTestId("base-button"));
		expect(count).toBe(1);

		fireEvent.press(screen.getByTestId("base-button"));
		expect(count).toBe(2);
	});
});