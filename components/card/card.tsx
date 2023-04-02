import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export const Card = () => {
  return (
	<View style={styles.card}>
	  <MaterialIcons name='2mp' size={50} color={"#fff"} />
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