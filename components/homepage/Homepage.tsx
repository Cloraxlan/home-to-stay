import React from "react";
import {
	Dimensions,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import MenuTab from "../MenuTab";
import { Button } from "@rneui/base";
import OrangeWhiteGradient from "../OrangeWhiteGradient";
import MilwaukeeBackground1 from "../MilwaukeeBackground1";
import { ResourceMap } from "../../model/Resources/Resource";

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
	search: require("./homePageIcons/search.png"),
};
const windowHeight = Dimensions.get("window").height;

const Homepage = () => {
	let menus = [];
	for (let resource in ResourceMap) {
		menus.push({ name: resource, link: "/" + resource });
	}

	return (
		<View>
			<MilwaukeeBackground1>
				<View style={styles.bannerPadding} />

				<Image
					style={styles.banner}
					source={require("./homePageIcons/htsbanner2.png")}
					resizeMode={"contain"}
				></Image>
				<View style={styles.bannerPadding} />
				<View style={styles.menuIcons}>
					{/*				<Button onPress={reset}>Reset</Button>*/}
					<MenuTab menus={menus} />
				</View>
				<Text style={{ padding: "5%" }}></Text>
			</MilwaukeeBackground1>
		</View>
	);
};

export default Homepage;

const styles = StyleSheet.create({
	banner: { width: "100%", height: windowHeight * 0.16 },
	bannerPadding: { backgroundColor: "white", height: "2%" },
	menuIcons: {
		//backgroundColor: "#fe994e",
		paddingTop: 10,
		width: "100%",
	},
});
