import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ResourceBlock from "./ResourceBlock";
import { Resource } from "../../model/Resources/Resource";

interface Props {
	resources: Resource[];
}
//A list of listing that is to be rendered in a verticle row
const ResourceList = (props: Props) => {
	return (
		<View style={styles.listingView}>
			{props.resources.map((resource, i) => {
				return <ResourceBlock resource={resource} key={i} />;
			})}
		</View>
	);
};

export default ResourceList;

const styles = StyleSheet.create({
	listingView: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
});
