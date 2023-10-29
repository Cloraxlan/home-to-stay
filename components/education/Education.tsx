import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";
import NavView from "../NavView";

import ResourceList from "../listingComponents/ResourceList";
import { useSelector } from "react-redux";
import { selectEducation } from "../../reducers/resourcesSlice";
import AppHeader from "../AppHeader";

const Education = () => {
	const resourceSelector = useSelector(selectEducation);
	return (
		<NavView>
			<AppHeader title="Education" />
			<Text>Education</Text>
			<ResourceList resources={resourceSelector} />
		</NavView>
	);
};

export default Education;

const styles = StyleSheet.create({});
