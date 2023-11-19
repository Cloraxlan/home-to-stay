import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Menu } from "./MenuTab";
import { Tile } from "@rneui/base";
import { useNavigate } from "react-router";

interface Props {
	menu: Menu;
}

const MenuIcon = (props: Props) => {
	const navigate = useNavigate();
	return (
		<React.Fragment>
			<Tile
				imageSrc={{
					uri: Image.resolveAssetSource(props.menu.icon).uri,
				}}
				title={props.menu.name}
				titleStyle={{ fontSize: 15 }}
				featured
				activeOpacity={1}
				imageContainerStyle={{ width: "100%", height: "100%" }}
				containerStyle={{ width: "100%", height: 100 }}
				imageProps={{ resizeMode: "contain" }}
				onPress={() => {
					navigate(props.menu.link);
				}}
			/>
			<Text style={styles.subHeader}>{props.menu.name}</Text>
		</React.Fragment>
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
		backgroundColor: "#2089dc",
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
