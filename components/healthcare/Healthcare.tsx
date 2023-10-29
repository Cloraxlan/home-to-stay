import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";
import NavView from "../NavView";
import ResourceList from "../listingComponents/ResourceList";
import { useSelector } from "react-redux";
import { selectHealthcare } from "../../reducers/resourcesSlice";
import AppHeader from "../AppHeader";

const Healthcare = () => {
	const resourceSelector = useSelector(selectHealthcare);
	return (
		<NavView>
			<AppHeader title="Healthcare" />
			<Text>Healthcare</Text>

			<ResourceList resources={resourceSelector} />
		</NavView>
	);
};

export default Healthcare;

const styles = StyleSheet.create({});
