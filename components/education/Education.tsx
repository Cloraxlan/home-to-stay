import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";
import NavView from "../NavView";
import { Resource } from "../../model/Resources/Resource";
import { Address } from "../../model/Address";
import { Phone } from "../../model/Phone";
import { URL } from "../../model/URL";
import ResourceList from "../listingComponents/ResourceList";

const Education = () => {
	let resource = new Resource(
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
			<Text>Education</Text>
			<ResourceList resources={resources} />
		</NavView>
	);
};

export default Education;

const styles = StyleSheet.create({});
