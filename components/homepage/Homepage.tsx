import React, { useState } from "react";
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
import { ResourceMap } from "../../model/Resources/Resource";
import Background from "../Background";
import SearchBarHome from "./SearchBarHome";
import SearchResultView from "../search/SearchResultView";
import Search from "../search/Search";

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
	const [searching, setSearching] = useState(false);
	return (
		<ScrollView>
			<Background>
				{!searching && (
					<View>
						<View style={styles.bannerPadding} />
						<Image
							style={styles.banner}
							source={require("./homePageIcons/htsbanner2.png")}
							resizeMode={"contain"}
						></Image>
					</View>
				)}
				<SearchBarHome setSearchBool={setSearching} />
				{!searching && (
					<View>
						<View style={styles.bannerPadding} />
						<View style={styles.menuIcons}>
							{/*				<Button onPress={reset}>Reset</Button>*/}
							<MenuTab menus={menus} />
						</View>
						<Text style={{ padding: "1%" }}></Text>
					</View>
				)}
				{searching && <Search />}
			</Background>
		</ScrollView>
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
