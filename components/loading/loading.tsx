import { View, Text, ActivityIndicator, } from 'react-native'
import React from 'react'

export const Loading = () => {
	return (
		<View>
			<ActivityIndicator size={"large"} color="#F22C78" />
			<Text style={{ color: "#fff", fontSize: 22, }} >Loading</Text>
		</View>
	)
}