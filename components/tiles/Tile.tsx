import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
	children: any;
	icon: string;
	title: string;
}
const Tile = (props: Props) => {
	return (
		<View style={styles.tileView}>
			<View style={styles.titleBox}>
				<View style={styles.iconBox}>
					<Image style={styles.icon} source={require("../../icons/home.png")} />
				</View>
				<View>
					<Text style={styles.title}>{props.title}</Text>
				</View>
			</View>
			<Text style={styles.tileContent}>{props.children}</Text>
		</View>
	);
};

export default Tile;

const styles = StyleSheet.create({
	tileView: {
		flexDirection: "column",
		borderTopColor: "purple",
		borderTopLeftRadius: 2,
		borderTopRightRadius: 2,
		borderTopWidth: 5,
		width: "100%",
	},
	titleBox: {
		backgroundColor: "#7cadf7",
		flexDirection: "row",
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		paddingLeft: 10,
	},
	tileContent: {},
	iconBox: {
		width: "10%",
		height: "10%",
	},
	icon: {
		width: "100%",
		height: undefined,
		aspectRatio: 1,
		paddingRight: 10,
	},
});
