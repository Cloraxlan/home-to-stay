import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ListingBlock, { Listing } from "./ListingBlock";

interface Props {
	listings: Listing[];
}
//A list of listing that is to be rendered in a verticle row
const ListingList = (props: Props) => {
	return (
		<View style={styles.listingView}>
			{props.listings.map((listing, i) => {
				return <ListingBlock listing={listing} key={i} />;
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
