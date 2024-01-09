import { StyleSheet, TouchableHighlight, View } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import LinearGradient from "react-native-linear-gradient";
import { Text } from "@rneui/themed";

interface Props {
	onPress: () => void;
	value: string;
}
const MenuButton = (props: Props) => {
	return (
		<LinearGradient
			colors={["#FF9800", "#F44336"]}
			start={{ x: 0.5, y: 0 }}
			end={{ x: 0.5, y: 1 }}
			style={styles.body}
		>
			<TouchableHighlight onPress={props.onPress}>
				<Text style={{ textAlign: "center", color: "white" }} h4>
					{props.value}
				</Text>
			</TouchableHighlight>
		</LinearGradient>
	);
};

export default MenuButton;

const styles = StyleSheet.create({
	button: {
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.43,
		shadowRadius: 9.51,
		elevation: 15,
	},
	body: {
		padding: 10,
		backgroundColor: "#696969cc",
		borderBottomLeftRadius: 15,
		borderTopRightRadius: 15,
		margin: 5,
	},
});
