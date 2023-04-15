import { useState, useEffect } from "react";

const initialIcons = [
	"adb",
	"phone-iphone",
	"api",
	"auto-awesome-mosaic",

	"border-all",
	"brightness-high",
	"camera",
	"code",
];
const buttonIcons = [
	"add",
	"favorite",
	"edit",
	"delete",

	"computer",
	"dns",
	"extension",
	"image",
];


export const useIcons = () => {
	const [iconsList, setIconsList] = useState<string[]>([]);
	const [buttonList, setButtonList] = useState<string[]>(buttonIcons);

	useEffect(() => {
		setIconsList([...iconsList, ...initialIcons]);
	}, []);

	function addIcon() {
		if (buttonList.length > 0) {
			const newButtonList = [...buttonList];
			const button = newButtonList.shift();
			if (button) {
				setIconsList([button, ...iconsList]);
			}
			setButtonList(newButtonList);
		}
	}
	function resetIcons() {
		setIconsList(iconsList);
		setButtonList(buttonIcons);
	}
	
	return {
		iconsList,
		buttonList,
		resetIcons,
		addIcon,
	};
}