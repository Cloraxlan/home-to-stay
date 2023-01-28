import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";
import NavView from "../NavView";

const Healthcare = () => {
	return (
		<NavView>
			<HomeButton />
			<Text>Healthcare</Text>
		</NavView>
	);
};

export default Healthcare;

const styles = StyleSheet.create({});
