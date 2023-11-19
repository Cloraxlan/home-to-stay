import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Resource, ResourceType } from "../../model/Resources/Resource";
import AppHeader from "../AppHeader";
import ResourceList from "./ResourceList";
import NavView from "../NavView";
import { useSelector } from "react-redux";
import { selectResources } from "../../reducers/resourcesSlice";

interface Props {
	selector: (state: { resources: any }) => Resource[];
	name: string;
}
const ResourcePage = (props: Props) => {
	//@ts-ignore
	const resources = useSelector(props.selector);
	return (
		<NavView>
			<AppHeader title={props.name} />
			<ResourceList resources={resources} />
		</NavView>
	);
};

export default ResourcePage;

const styles = StyleSheet.create({});
