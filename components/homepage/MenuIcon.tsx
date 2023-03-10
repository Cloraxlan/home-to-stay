import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Menu } from "./MenuTab";

interface Props {
	menu: Menu;
}

const MenuIcon = (props: Props) => {
	return (
		<View style={styles.icon}>
			<Image style={styles.iconImage} source={props.menu.icon} />
			<Text>{props.menu.name}</Text>
		</View>
	);
};

export default MenuIcon;

const styles = StyleSheet.create({
	icon: {
		border: "4px",
		borderRadius: 30,
		justifyContent: "center",
		display: "flex",
		alignItems: "center",
	},
	iconImage: { width: 100, height: 100 },
});
