import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";

import NavView from "../NavView";
import ResourceList from "../listingComponents/ResourceList";
import { Resource } from "../../model/Resources/Resource";
import { Address } from "../../model/Clickables/Address";
import { Phone } from "../../model/Clickables/Phone";
import { URL } from "../../model/Clickables/URL";
import { JobResource } from "../../model/Resources/JobResouce";
import { selectJobs } from "../../reducers/resourcesSlice";
import { useSelector } from "react-redux";

const Jobs = () => {
	const resourceSelector = useSelector(selectJobs);
	return (
		<NavView>
			<HomeButton />
			<Text>Jobs</Text>

			<ResourceList resources={resourceSelector} />
		</NavView>
	);
};

export default Jobs;

const styles = StyleSheet.create({});
