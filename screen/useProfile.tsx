import { useState, useReducer } from "react";

export const useProfile = () => {
	const [user, setUser] = useState<object[]>([]);

	return {user};
}