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
import { useSelector } from "react-redux";
import { selectHousing } from "../../reducers/resourcesSlice";
import { createSelector } from "@reduxjs/toolkit";
import AppHeader from "../AppHeader";

const Housing = () => {
	const resourceSelector = useSelector(selectHousing);

	return (
		<NavView>
			<AppHeader title="Housing" />
			<Text>Housing</Text>
			<ResourceList resources={resourceSelector} />
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
