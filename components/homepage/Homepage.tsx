import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MenuTab from "../MenuTab";
import { Button } from "@rneui/base";
import { reset } from "../../database/loader";
import OrangeWhiteGradient from "../OrangeWhiteGradient";
import MilwaukeeBackground1 from "../MilwaukeeBackground1";

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
const Homepage = () => {
	return (
		<ScrollView>
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
					<MenuTab
						menus={[
							{ name: "Search", link: "/search", icon: icons.search },
							//{ name: "Calendar", link: "/calendar", icon: icons.calendar },
							//{ name: "Banking", link: "/banking", icon: icons.banking },
							{ name: "Education", link: "/education", icon: icons.education },
							{ name: "Food", link: "/food", icon: icons.food },
							{
								name: "Healthcare",
								link: "/healthcare",
								icon: icons.healthcare,
							},
							{ name: "Housing", link: "/housing", icon: icons.housing },
							{
								name: "Identification",
								link: "/id",
								icon: icons.identification,
							},
							{ name: "Jobs", link: "/jobs", icon: icons.jobs },
							{ name: "Services", link: "/services", icon: icons.services },
						]}
					/>
				</View>
				<Text style={{ padding: "5%" }}></Text>
			</MilwaukeeBackground1>
		</ScrollView>
	);
};

export default Homepage;

const styles = StyleSheet.create({
	banner: { width: "100%" },
	bannerPadding: { backgroundColor: "white", height: "2%" },
	menuIcons: {
		//backgroundColor: "#fe994e",
		paddingTop: 10,
		width: "100%",
	},
});
