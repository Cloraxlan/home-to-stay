import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ResourceBlock from "./ResourceBlock";
import { Resource } from "../../model/Resources/Resource";
import GetLocation from "react-native-get-location/dist";
import { Location } from "../../model/Location";

interface Props {
	resources: Resource[];
}
//A list of listing that is to be rendered in a verticle row
const ResourceList = (props: Props) => {
	/*const [location, setLocation] = useState<any>(null);
	useEffect(() => {
		GetLocation.getCurrentPosition({
			enableHighAccuracy: true,
			timeout: 2000,
		}).then((loc) => {
			setLocation(loc);
		});
	}, []);

	useEffect(() => {
		props.resources = props.resources.sort((a, b) => {
			if (a.address == undefined && b.address == undefined) {
				return 0;
			}
			if (a.address == undefined) {
				return -1;
			}
			if (b.address == undefined) {
				return 1;
			}
			let aDist = Location.of(a.address.location).distance(location);
			let bDist = Location.of(b.address.location).distance(location);
			if (aDist == bDist) {
				return 0;
			}
			if (aDist < bDist) {
				return -1;
			}
			return 1;
		});
	}, [location]);
	let test = async () => {};
	test();*/
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
