import React from "react";
import {
	ImageSourcePropType,
	ImageURISource,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { Link } from "react-router-native";
import { v4 } from "uuid";
import MenuIcon from "./MenuIcon";
export interface Menu {
	icon: any;
	name: string;
	link: string;
}
interface Props {
	menus: Array<Menu>;
}
//Renders links to menu on homepage
const MenuTab = (props: Props) => {
	return (
		<View style={styles.menus}>
			{props.menus.map((menu: Menu) => {
				return (
					<Link style={styles.link} key={menu.link} to={menu.link}>
						<MenuIcon menu={menu}></MenuIcon>
					</Link>
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
