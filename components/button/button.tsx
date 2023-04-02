import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export interface IButton {
	onPress: () => void;
	children: JSX.Element;
}
export const Button = ({ onPress, children }: IButton) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
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