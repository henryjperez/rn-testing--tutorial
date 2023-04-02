import { StyleSheet, Text, View, Image } from 'react-native'

export interface IAvatar {

}
export const Avatar = (props: IAvatar) => {
	return (
		<View style={styles.border}>
			<Image source={require("../../assets/avatar.png")} style={styles.img} alt={`avatar image`} />
		</View>
	)
}

export const styles = StyleSheet.create({
	img: {
		height: 100,
		width: 100,
		resizeMode: "stretch",
		borderRadius: 100,
	},
	border: {
		height: 110,
		width: 110,
		backgroundColor: "#52A2D0",
		borderRadius: 110,
		justifyContent: "center",
		alignItems: "center",
	}
});