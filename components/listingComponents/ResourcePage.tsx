import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Resource } from "../../model/Resources/Resource";
import AppHeader from "../AppHeader";
import ResourceList from "./ResourceList";
import NavView from "../NavView";
import { useSelector } from "react-redux";

interface Props {
	selector: (state: { resources: any }) => Resource[];
	name: string;
}
const ResourcePage = (props: Props) => {
	const resourceSelector = useSelector(props.selector);
	return (
		<NavView>
			<AppHeader title={props.name} />
			<ResourceList resources={resourceSelector} />
		</NavView>
	);
};

export default ResourcePage;

const styles = StyleSheet.create({});
