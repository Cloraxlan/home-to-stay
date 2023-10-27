import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";
import NavView from "../NavView";
import ResourceList from "../listingComponents/ResourceList";
import { useSelector } from "react-redux";

const Healthcare = () => {
	const resourceSelector = useSelector(selectHousing);
	return (
		<NavView>
			<HomeButton />
			<Text>Healthcare</Text>

			<ResourceList resources={resourceSelector} />
		</NavView>
	);
};

export default Healthcare;

const styles = StyleSheet.create({});
