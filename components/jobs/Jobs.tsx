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

const Jobs = () => {
	let resource = new JobResource(
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
			<Text>Jobs</Text>
			<ResourceList resources={resources} />
		</NavView>
	);
};

export default Jobs;

const styles = StyleSheet.create({});
