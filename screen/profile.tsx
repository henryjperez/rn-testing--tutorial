import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Avatar, Title } from "../components/avatar";
import { Card, GroupCards } from "../components/card";
import { Button } from "../components/button";
import { useProfile } from "./useProfile";

export default function ProfileScreen() {
	const { user } = useProfile();
	function handleCardPress() {
		Alert.alert("You pressed a <Card />");
	}
	function handleButtonPress() {
		Alert.alert("You pressed the <Button />");
	}

	return (
		<View style={styles.main_container}>
			<StatusBar style="auto" />

			<View style={styles.button_container}>
				<Button onPress={handleButtonPress}>
					<MaterialIcons name='add' size={40} color={"#fff"} />
				</Button>
			</View>

			<View style={styles.container}>
				<Avatar />
				<Title>
					User
				</Title>
				<ScrollView style={styles.scroll}>
					<GroupCards>
						<Card onPress={handleCardPress} />
						<Card onPress={handleCardPress} />
						<Card onPress={handleCardPress} />
						<Card onPress={handleCardPress} />

						<Card onPress={handleCardPress} />
						<Card onPress={handleCardPress} />
						<Card onPress={handleCardPress} />
						<Card onPress={handleCardPress} />
					</GroupCards>
				</ScrollView>
			</View>
		</View >
	);
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1,
		backgroundColor: "#11102F",
		paddingTop: 50,
	},
	container: {
		alignItems: 'center',
		justifyContent: 'flex-end',
		flex: 1,
	},
	scroll: {
		flex: 1,
		height: "100%",
	},
	button_container: {
		marginRight: 20,
		marginLeft: "auto",
	}
});
