import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";
import NavView from "../NavView";
import { Resource } from "../../model/Resources/Resource";
import { Phone } from "../../model/Clickables/Phone";
import { URL } from "../../model/Clickables/URL";
import { Address } from "../../model/Clickables/Address";
import ResourceList from "../listingComponents/ResourceList";
import { FoodResouce } from "../../model/Resources/FoodResouce";
import { selectFood } from "../../reducers/resourcesSlice";
import { useSelector } from "react-redux";
import AppHeader from "../AppHeader";

const Food = () => {
	const resourceSelector = useSelector(selectFood);
	return (
		<NavView>
			<AppHeader title="Food" />
			<Text>Food</Text>

			<ResourceList resources={resourceSelector} />
		</NavView>
	);
};

export default Food;

const styles = StyleSheet.create({});
