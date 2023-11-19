import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import ResourceBlock from "./ResourceBlock";
import { Resource } from "../../model/Resources/Resource";
import GetLocation from "react-native-get-location/dist";
import { Location } from "../../model/Location";
import { ButtonGroup, Text } from "@rneui/themed";
import { useSelector } from "react-redux";
import { selectResourceLoading } from "../../reducers/resourcesSlice";

interface Props {
	resources: Resource[];
}
enum SortTypes {
	DISTANCE,
	ALPHA,
}
const sorts = [SortTypes.DISTANCE, SortTypes.ALPHA];
//A list of listing that is to be rendered in a verticle row
const ResourceList = (props: Props) => {
	const [sort, setSort] = useState<SortTypes>(SortTypes.DISTANCE);
	const [location, setLocation] = useState<any>(null);
	const [resources, setResources] = useState<Resource[]>(props.resources);
	const loadingResources = useSelector(selectResourceLoading);
	const [loadingLocation, setLoadingLocation] = useState<boolean>(false);

	useEffect(() => {
		switch (sort) {
			case SortTypes.DISTANCE:
				setLoadingLocation(true);
				GetLocation.getCurrentPosition({
					enableHighAccuracy: true,
					timeout: 5000,
				}).then((loc) => {
					setLocation(
						new Location({ latitude: loc.latitude, longitude: loc.longitude }),
					);
					console.log(loc);
					setLoadingLocation(false);
				});
				break;
			case SortTypes.ALPHA:
				let r = [...resources].sort((a, b) =>
					a.header.toLowerCase().localeCompare(b.header.toLowerCase()),
				);

				setResources(r);
				break;
		}
	}, [sort]);

	useEffect(() => {
		if (location != null && sort == SortTypes.DISTANCE) {
			let r = [...resources].sort((a, b) => {
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
			setResources(r);
		}
	}, [location, sort]);

	useEffect(() => {
		resources.map((m) => {
			console.log(m.header);
			console.log(m.address?.location.coordinates);
		});
	}, [resources]);

	let isLoading =
		(sort == SortTypes.DISTANCE && location) || sort != SortTypes.DISTANCE;
	let displayLoadingCircle = loadingResources || loadingLocation;
	return (
		<ScrollView>
			<ButtonGroup
				buttons={["Distance", "Alphabetical"]}
				selectedIndex={sorts.indexOf(sort)}
				onPress={(index) => {
					console.log(index);
					setSort(sorts[index]);
				}}
				containerStyle={{ marginBottom: 20 }}
			/>
			{!displayLoadingCircle && (
				<View style={styles.listingView}>
					{isLoading && (
						<React.Fragment>
							<React.Fragment>
								{resources.map((resource, i) => {
									return <ResourceBlock resource={resource} key={i} />;
								})}
							</React.Fragment>
							<React.Fragment>
								{resources.length == 0 && (
									<Text h3={true}>No Resources Avaliable</Text>
								)}
							</React.Fragment>
							<Text style={{ padding: "50%" }}></Text>
						</React.Fragment>
					)}
				</View>
			)}
			{displayLoadingCircle && (
				<View>
					<ActivityIndicator size="large" />
				</View>
			)}
		</ScrollView>
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
