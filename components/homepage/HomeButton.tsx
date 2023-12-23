import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

const HomeButton = () => {
	return (
		<View style={styles.button}>
			<Link to="/">
				<Text style={styles.text}>Home</Text>
			</Link>
		</View>
	);
};

export default HomeButton;

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		textAlign: "center",
	},
	button: {
		width: "30%",
		borderColor: "gray",
		borderRadius: 3,
		borderWidth: 5,
		marginBottom: "10%",
		backgroundColor: "#c6d8f5",
		color: "black",
		fontWeight: "700",
	},
});
