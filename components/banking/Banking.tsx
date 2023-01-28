import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";
import NavView from "../NavView";

const Banking = () => {
	return (
		<NavView>
			<HomeButton />
			<Text>Banking</Text>
		</NavView>
	);
};

export default Banking;

const styles = StyleSheet.create({});
