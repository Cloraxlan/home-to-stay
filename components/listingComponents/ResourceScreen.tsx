import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Resource } from "../../model/Resources/Resource";
import AppHeader from "../AppHeader";
import { selectCurrentResource } from "../../reducers/resourcesSlice";
import { useSelector } from "react-redux";

const ResourceScreen = () => {
	const resource = useSelector(selectCurrentResource);

	return (
		<View>
			<AppHeader title={resource.header} />
		</View>
	);
};

export default ResourceScreen;

const styles = StyleSheet.create({});
