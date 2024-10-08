import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Menu } from "./MenuTab";
import { Tile } from "@rneui/base";
import { useNavigate } from "react-router";
import { ThemedButton } from "react-native-really-awesome-button";
import MenuButton from "./MenuButton";

interface Props {
	menu: Menu;
	link: string;
}

const MenuIcon = (props: Props) => {
	const navigate = useNavigate();
	const windowHeight = Dimensions.get("window").height;

	return (
		<View style={{ height: windowHeight * 0.09 }}>
			<MenuButton
				onPress={() => {
					navigate(props.link);
				}}
				value={props.menu.name}
			/>
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
	subHeader: {
		backgroundColor: "#605b63",
		color: "white",
		textAlign: "center",
		paddingVertical: 5,
		margin: 10,
		fontWeight: "bold",
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	shadowProp: {
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
});
