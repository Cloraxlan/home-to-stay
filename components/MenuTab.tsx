import React from "react";
import {
	ImageSourcePropType,
	ImageURISource,
	Pressable,
	StyleSheet,
	Text,
	TouchableHighlight,
	Vibration,
	View,
} from "react-native";
import { Link, useNavigate } from "react-router-native";
import { v4 } from "uuid";
import MenuIcon from "./MenuIcon";
export interface Menu {
	name: string;
	link: string;
}
interface Props {
	menus: Array<Menu>;
}
//Renders links to menu on homepage
const MenuTab = (props: Props) => {
	const navigate = useNavigate();

	return (
		<View style={styles.menus}>
			{props.menus.map((menu: Menu) => {
				return (
					<TouchableHighlight style={styles.link} key={menu.link}>
						<MenuIcon link={menu.link} menu={menu}></MenuIcon>
					</TouchableHighlight>
				);
			})}
		</View>
	);
};

export default MenuTab;

const styles = StyleSheet.create({
	link: { width: "50%" },
	menus: {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
	},
});
