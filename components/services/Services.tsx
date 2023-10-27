import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";
import NavView from "../NavView";
import { selectServices } from "../../reducers/resourcesSlice";
import ResourceList from "../listingComponents/ResourceList";
import { useSelector } from "react-redux";

const Services = () => {
	const resourceSelector = useSelector(selectServices);
	return (
		<NavView>
			<HomeButton />
			<Text>Healthcare</Text>

			<ResourceList resources={resourceSelector} />
		</NavView>
	);
};

export default Services;

const styles = StyleSheet.create({});
