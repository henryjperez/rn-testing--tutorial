import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Alert, ActivityIndicator, } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Avatar, Title } from "../components/avatar";
import { Card, GroupCards } from "../components/card";
import { Button } from "../components/button";
import { Loading } from "../components/loading";
import { useIcons } from "../hooks/useIcons";

export default function ProfileScreen() {
	const { iconsList, addIcon, buttonList, resetIcons, } = useIcons();

	function handleCardPress() {
		Alert.alert("You pressed a <Card />");
	}
	function handleButtonPress() {
		Alert.alert("You pressed the <Button />");
	}

	return (
		<View style={styles.main_container}>
			<StatusBar style="light" />

			{
				(buttonList.length > 0) && (
					<View style={styles.button_container}>
						<Button onPress={addIcon}>
							{/* @ts-ignore */}
							<MaterialIcons name={buttonList[0]} size={40} color={"#fff"} />
						</Button>
					</View>
				)
			}

			{
				(buttonList.length <= 0) && (
					<View style={styles.reset_container}>
						<Button onPress={resetIcons}>
							<MaterialIcons name={"replay"} size={40} color={"#fff"} />
						</Button>
					</View>
				)
			}

			<View style={styles.container}>
				<Avatar />
				<Title>
					@henryjperez
				</Title>
				<ScrollView style={styles.scroll}>
					<GroupCards><>
						{!(iconsList.length > 0) && <Loading />}
						{
							iconsList.map((icon, index) => (
								<Card
									onPress={handleCardPress}
									key={`${icon}-${index}`}
									icon={icon}
								/>
							))
						}
					</></GroupCards>
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
	},
	reset_container: {
		marginRight: "auto",
		marginLeft: 20,
	}
});
