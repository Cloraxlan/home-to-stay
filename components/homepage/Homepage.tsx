import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuTab from "./MenuTab";

const Homepage = () => {
	return (
		<View>
			<MenuTab
				menus={[
					{ name: "Banking", link: "/banking" },
					{ name: "Education", link: "/education" },
					{ name: "Food", link: "/food" },
					{ name: "Healthcare", link: "/healthcare" },
					{ name: "Housing", link: "/housing" },
					{ name: "Identification", link: "/id" },
					{ name: "Jobs", link: "/jobs" },
					{ name: "Services", link: "/services" },
				]}
			/>
		</View>
	);
};

export default Homepage;

const styles = StyleSheet.create({});
