import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";
import Tile from "../tiles/Tile";
import HousingTile from "./HousingTile";

const Housing = () => {
	return (
		<View>
			<HomeButton />
			<View style={styles.tiles}>
				<Tile icon={"houseIcon"} title="title">
					<Text>hihi</Text>
				</Tile>
			</View>
		</View>
	);
};

export default Housing;

const styles = StyleSheet.create({
	tiles: {
		flexDirection: "row",
		justifyContent: "center",
		padding: "5%",
	},
});
