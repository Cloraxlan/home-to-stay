import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";
import MenuTab from "../MenuTab";
import NavView from "../NavView";
import AppHeader from "../AppHeader";

const IdHome = () => {
	return (
		<NavView>
			<View style={styles.menu}>
				<AppHeader title="Identification" />

				<MenuTab
					menus={[
						{
							name: "Social Security",
							link: "/id/ss",
							icon: require("./ssn.png"),
						},
					]}
				/>
				<MenuTab
					menus={[
						{
							name: "Drivers Licence",
							link: "/id/license",
							icon: require("./card.png"),
						},
					]}
				/>
				<MenuTab
					menus={[
						{
							name: "Birth Certificate",
							link: "/id/birth",
							icon: require("./birth.png"),
						},
					]}
				/>
			</View>
		</NavView>
	);
};

export default IdHome;

const styles = StyleSheet.create({
	menu: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: "100%",
		alignItems: "center",
	},
});
