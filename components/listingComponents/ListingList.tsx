import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ResourceBlock, { Listing } from "./ListingBlock";
import { Resource } from "../../model/Resources/Resource";

interface Props {
	listings: Resource[];
}
//A list of listing that is to be rendered in a verticle row
const ListingList = (props: Props) => {
	return (
		<View style={styles.listingView}>
			{props.listings.map((listing, i) => {
				return <ResourceBlock resource={listing} key={i} />;
			})}
		</View>
	);
};

export default ListingList;

const styles = StyleSheet.create({
	listingView: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
});
