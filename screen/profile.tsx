import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";

import { Avatar, Title } from "../components/avatar";
import { Card, GroupCards } from "../components/card";

export default function ProfileScreen() {
	const [user, setUser] = useState<object[]>([]);

	return (
		<View style={styles.main_container}>
			<StatusBar style="auto" />

			<View style={styles.container}>
				<Avatar />
				<Title>
					Super text
				</Title>
				<GroupCards>
					<Card />
					<Card />
					<Card />
					<Card />
				</GroupCards>
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1,
		backgroundColor: "#11102F",
	},
	container: {
		alignItems: 'center',
		justifyContent: 'flex-end',
		flex: 1,
	},
});
