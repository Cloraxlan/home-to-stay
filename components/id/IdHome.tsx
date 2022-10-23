import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";
import MenuTab from "../homepage/MenuTab";

const IdHome = () => {
	return (
		<View>
			<HomeButton />
			<MenuTab menus={[{ name: "Social Security", link: "/id/ss" }]} />
			<MenuTab menus={[{ name: "Drivers Licence", link: "/id/license" }]} />
		</View>
	);
};

export default IdHome;

const styles = StyleSheet.create({});
