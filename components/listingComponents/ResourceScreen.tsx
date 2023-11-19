import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Resource } from "../../model/Resources/Resource";
import AppHeader from "../AppHeader";
import { selectCurrentResource } from "../../reducers/resourcesSlice";
import { useSelector } from "react-redux";
import NavView from "../NavView";

const ResourceScreen = () => {
	const resource = useSelector(selectCurrentResource);

	return (
		<NavView>
			<AppHeader title={resource.header} />
		</NavView>
	);
};

export default ResourceScreen;

const styles = StyleSheet.create({});
