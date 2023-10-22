import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";

import NavView from "../NavView";
import { Resource } from "../../model/Resources/Resource";
import { Address } from "../../model/Clickables/Address";
import { Phone } from "../../model/Clickables/Phone";
import { URL } from "../../model/Clickables/URL";
import ResourceList from "../listingComponents/ResourceList";
import { HousingResouce } from "../../model/Resources/HousingResource";

const Housing = () => {
	let resource = new HousingResouce(
		"Test Housing",
		"description",
		new Address(
			"1121 N Milwaukee St, Milwaukee",
			"1121 N Milwaukee St, Milwaukee, WI 53202",
		),
		new URL("http://google.com"),
		new Phone("8153458575"),
	);

	let resources: Resource[] = [resource, resource, resource, resource];
	return (
		<NavView>
			<HomeButton />
			<Text>Housing</Text>
			<ResourceList resources={resources} />
		</NavView>
	);
};

export default Housing;

const styles = StyleSheet.create({
	tiles: {
		flexDirection: "row",
		justifyContent: "center",
		padding: "5%",
	},
});
