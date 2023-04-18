import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export interface IButton {
	onPress: () => void;
	children: JSX.Element;
	disabled?: boolean;
}
export const Button = ({ onPress, children, disabled = false }: IButton) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button} disabled={disabled}>
			{children}
		</TouchableOpacity>
	)
}

export const styles = StyleSheet.create({
	button: {
		backgroundColor: "#F22C78",
		borderRadius: 50,
		height: 50,
		width: 50,
		justifyContent: "center",
		alignItems: "center",
	},
});