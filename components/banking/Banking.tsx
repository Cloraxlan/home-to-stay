import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";
import NavView from "../NavView";
import AppHeader from "../AppHeader";

const Banking = () => {
	return (
		<NavView>
			<AppHeader title="Banking" />
			<Text>Banking</Text>
		</NavView>
	);
};

export default Banking;

const styles = StyleSheet.create({});
