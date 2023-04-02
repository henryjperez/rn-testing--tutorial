import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export interface IGroupCards {
	children: JSX.Element[] | JSX.Element;
}
export const GroupCards = ({ children }: IGroupCards) => {
	return (
		<View style={styles.container}>
			{ children }
		</View>
	)
}

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 10,
		justifyContent: "center",
		alignContent: "center",
		paddingVertical: 20,
	}
});