import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";
import MenuTab from "../homepage/MenuTab";
import NavView from "../NavView";
import AppHeader from "../AppHeader";

const IdHome = () => {
	return (
		<NavView>
			<AppHeader title="Identification" />

			<MenuTab menus={[{ name: "Social Security", link: "/id/ss" }]} />
			<MenuTab menus={[{ name: "Drivers Licence", link: "/id/license" }]} />
			<MenuTab menus={[{ name: "Birth Certificate", link: "/id/birth" }]} />
		</NavView>
	);
};

export default IdHome;

const styles = StyleSheet.create({});
