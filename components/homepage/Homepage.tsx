import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MenuTab from "./MenuTab";
import { csvLoader } from "../../database/loader";
import { Resource } from "../../model/Resources/Resource";
import { useDispatch } from "react-redux";
import { addResource } from "../../reducers/resourcesSlice";
const icons = {
	calendar: require("./homePageIcons/calendar.png"),
	banking: require("./homePageIcons/bank2.png"),
	education: require("./homePageIcons/education.png"),
	food: require("./homePageIcons/diet.png"),
	healthcare: require("./homePageIcons/medical-checkup.png"),
	housing: require("./homePageIcons/house.png"),
	identification: require("./homePageIcons/card.png"),
	jobs: require("./homePageIcons/tools.png"),
	services: require("./homePageIcons/box.png"),
};
const Homepage = () => {
	//Testing
	const dispatch = useDispatch();
	let test = async () => {
		let r = await csvLoader();
		console.log(r);

		r.housing.map((h) => {
			dispatch(addResource(h));
		});
	};
	test();
	return (
		<View>
			<Image
				style={styles.banner}
				source={require("./homePageIcons/htsbanner.png")}
				resizeMode={"contain"}
			></Image>
			<View style={styles.menuIcons}>
				<MenuTab
					menus={[
						{ name: "Calendar", link: "/calendar", icon: icons.calendar },
						{ name: "Banking", link: "/banking", icon: icons.banking },
						{ name: "Education", link: "/education", icon: icons.education },
						{ name: "Food", link: "/food", icon: icons.food },
						{ name: "Healthcare", link: "/healthcare", icon: icons.healthcare },
						{ name: "Housing", link: "/housing", icon: icons.housing },
						{ name: "Identification", link: "/id", icon: icons.identification },
						{ name: "Jobs", link: "/jobs", icon: icons.jobs },
						{ name: "Services", link: "/services", icon: icons.services },
					]}
				/>
			</View>
		</View>
	);
};

export default Homepage;

const styles = StyleSheet.create({
	banner: { width: "100%" },
	menuIcons: {
		backgroundColor: "#4463ff",
	},
});
