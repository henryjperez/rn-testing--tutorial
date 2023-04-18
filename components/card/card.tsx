import { StyleSheet, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export interface ICard {
	icon: string;
	onPress: () => void;
	activate?: boolean;
}
export const Card = (props: ICard) => {
	const [activated, setActivated] = useState(!!props.activate);
	const rotateView = useRef(new Animated.Value(0)).current;

	const rotation = rotateView.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '180deg'],
	})

	function handleOnPress() {
		handleRotation();
	}

	function handleActivation() {
		setActivated(!activated);
	}

	function handleRotation() {
		const timing = 500;
		const openAnimation = Animated.timing(rotateView, {
			toValue: 0.5,
			duration: timing,
			useNativeDriver: true,
		});
		const endAnimation = Animated.timing(rotateView, {
			toValue: 1,
			duration: timing,
			useNativeDriver: true,
		});

		openAnimation.start(() => {
			props?.onPress();
			handleActivation();
			endAnimation.start(() => {
				openAnimation.reset();
				endAnimation.reset();
			});
		});
	}

	return (
		<Animated.View style={[styles.container, { transform: [{ rotateY: rotation }] }]}>
			<TouchableOpacity style={styles.card} onPress={handleOnPress}>
				{
					/* @ts-ignore */
					activated && <MaterialIcons name={props.icon} size={50} color={"#fff"} />
				}
			</TouchableOpacity>
		</Animated.View>
	)
}

export const styles = StyleSheet.create({
	container: {
		height: 120,
		width: "45%",
		justifyContent: "center",
		alignItems: "center",
	},
	card: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",

		borderRadius: 10,
		backgroundColor: "#181839",
		padding: 10,
	}
});