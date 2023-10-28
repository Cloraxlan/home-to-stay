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
	const [location, setLocation] = useState<any>(null);
	const [resources, setResources] = useState<Resource[]>(props.resources);

	useEffect(() => {
		GetLocation.getCurrentPosition({
			enableHighAccuracy: true,
			timeout: 2000,
		}).then((loc) => {
			console.log({ latitude: loc.latitude, longitude: loc.longitude });
			setLocation(
				new Location({ latitude: loc.latitude, longitude: loc.longitude }),
			);
		});
	}, []);

	useEffect(() => {
		if (location != null) {
			let r = props.resources.sort((a, b) => {
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
				console.log(
					a.address.display(),
					" ",
					aDist,
					" ",
					b.address.display(),
					" ",
					bDist,
				);
				if (aDist == bDist) {
					return 0;
				}
				if (aDist < bDist) {
					console.log("close");
					return -1;
				}
				return 1;
			});
			setResources(r);
		}
	}, [location]);

	return (
		<View style={styles.listingView}>
			{resources.map((resource, i) => {
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
