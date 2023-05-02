import { useState, useEffect, useReducer } from "react";

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

enum eTypes {
	ACTIVATE = "ACTIVATE",
	DEACTIVATE = "DEACTIVATE",

	ADD_ICON = "ADD_ICON",
	RESET_CARDS = "RESET_CARDS",

	EMPTY_STATE = "EMPTY_STATE",
}
interface IActions {
	type: eTypes;
	payload?: any | string;
}
interface IIconItem {
	icon: string;
	activate: boolean;
}


function iconsReducer(state: IIconItem[], action: IActions) {
	const { type, payload } = action;
	let newState: typeof state;
	let item: IIconItem;

	switch (type) {
		case eTypes.ACTIVATE:
			newState = [...state];
			item = newState[payload];
			newState[payload] = { activate: true, icon: item.icon };

			return newState;

		case eTypes.DEACTIVATE:
			newState = [...state];
			item = newState[payload];
			newState[payload] = { activate: false, icon: item.icon };

			return newState;

		case eTypes.ADD_ICON:
			newState = [{ activate: true, icon: payload }, ...state];
			return newState;

		case eTypes.RESET_CARDS:
			newState = initialIcons.map(icon => ({activate: false, icon}));
			return newState;

		case eTypes.EMPTY_STATE:
			return [];
	
		default:
			return state;
	}
}

function activate(index: number) {
	return {
		type: eTypes.ACTIVATE,
		payload: index,
	}
}
function deactivate(index: number) {
	return {
		type: eTypes.DEACTIVATE,
		payload: index,
	}
}
function addIconAction(icon: string) {
	return {
		type: eTypes.ADD_ICON,
		payload: icon,
	}
}
function resetAction() {
	return {
		type: eTypes.RESET_CARDS,
		payload: null,
	}
}
function emptyState() {
	return {
		type: eTypes.EMPTY_STATE,
		payload: null,
	}
}

export const useIcons = () => {
	const [buttonList, setButtonList] = useState<string[]>(buttonIcons);
	const [iconsList, dispatch] = useReducer(iconsReducer, []);

	useEffect(() => {
		setTimeout(() => dispatch(resetAction()), 1000);
	}, []);

	function addIcon(icon: string) {
		setButtonList(buttonList.slice(1, buttonList.length));
		dispatch(addIconAction(icon));
	}
	function resetCards() {
		dispatch(resetAction());
	}
	function resetIcons() {
		emptyCards();
		setButtonList([...buttonIcons]);
		setTimeout(resetCards, 500);
	}
	function activateIcon(indexCard: number) {
		dispatch(activate(indexCard));
	}
	function deactivateIcon(indexCard: number) {
		dispatch(deactivate(indexCard));
	}
	function emptyCards() {
		dispatch(emptyState());
	}
	
	return {
		iconsList,
		buttonList,
		resetIcons,
		addIcon,
		activateIcon,
		deactivateIcon,
		emptyCards,
		resetCards,
	};
}