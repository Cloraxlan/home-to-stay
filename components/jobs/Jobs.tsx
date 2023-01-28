import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";
import { Listing } from "../listingComponents/ListingBlock";
import ListingList from "../listingComponents/ListingList";
import NavView from "../NavView";

const Jobs = () => {
	let listing: Listing = {
		header: "Testing Job",
		icon: require("./jobs.png"),
		address: "1234 Big Lane ",
		phone: "123-456-7890",
		website: "https://google.com",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
	};
	let listings: Listing[] = [listing, listing, listing, listing];
	return (
		<NavView>
			<HomeButton />
			<Text>Jobs</Text>
			<ListingList listings={listings} />
		</NavView>
	);
};

export default Jobs;

const styles = StyleSheet.create({});
