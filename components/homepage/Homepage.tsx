import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuTab from "./MenuTab";
let icon = require("./housing.png");

const Homepage = () => {
	return (
		<View>
			<MenuTab
				menus={[
					{ name: "Calendar", link: "/calendar", icon: icon },
					{ name: "Banking", link: "/banking", icon: icon },
					{ name: "Education", link: "/education", icon: icon },
					{ name: "Food", link: "/food", icon: icon },
					{ name: "Healthcare", link: "/healthcare", icon: icon },
					{ name: "Housing", link: "/housing", icon: icon },
					{ name: "Identification", link: "/id", icon: icon },
					{ name: "Jobs", link: "/jobs", icon: icon },
					{ name: "Services", link: "/services", icon: icon },
				]}
			/>
		</View>
	);
};

export default Homepage;

const styles = StyleSheet.create({});
