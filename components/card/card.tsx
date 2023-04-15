import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export interface ICard {
	icon: string;
	onPress: () => void;
}
export const Card = (props: ICard) => {
	return (
		<TouchableOpacity style={styles.card} onPress={props.onPress}>
			{/* @ts-ignore */}
			<MaterialIcons name={props.icon} size={50} color={"#fff"} />
		</TouchableOpacity>
	)
}

export const styles = StyleSheet.create({
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