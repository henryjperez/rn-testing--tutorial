import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export interface ITitle {
	children: string;
}
export const Title = ({ children }: ITitle) => <Text style={styles.title}>{ children }</Text>

export const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		color: "#fff",
		fontWeight: "bold",
	}
});