import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Card = () => {
  return (
	<View style={styles.card}>
	  <Text style={styles.title}>title</Text>
	  <Text style={styles.text}>Text</Text>
	</View>
  )
}

export const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
	},
	text: {
		fontSize: 16,
		color: "#fff",
	},
	card: {
		borderRadius: 10,
		backgroundColor: "#181839",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		width: "45%",
		height: 120,
	}
});