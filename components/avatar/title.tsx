import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export interface ITitle {
	children: string;
}
export const Title = (props: ITitle) => <Text style={styles.title}>Title</Text>

export const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		color: "#fff",
		fontWeight: "bold",
	}
});