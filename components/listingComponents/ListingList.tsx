import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ListingBlock, { Listing } from "./ListingBlock";

interface Props {
	listings: Listing[];
}

const ListingList = (props: Props) => {
	return (
		<View>
			{props.listings.map((listing, i) => {
				return <ListingBlock listing={listing} key={i} />;
			})}
		</View>
	);
};

export default ListingList;

const styles = StyleSheet.create({});
