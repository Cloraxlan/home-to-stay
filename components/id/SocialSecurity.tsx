import React, { useRef, useState } from "react";
import {
	Button,
	Linking,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import HomeButton from "../homepage/HomeButton";
import openMap from "react-native-open-maps";
import NavView from "../NavView";
import AppHeader from "../AppHeader";

async function findAddress(zipCode: string) {
	let x = await fetch(
		"https://secure.ssa.gov/ICON/ic001.action?&zipCodeSearched=" +
			zipCode +
			"&locate=Locate&JS_ENABLED=1",
	);
	let text = await x.text();
	const re = new RegExp(
		'(?<=name="destinationAddress" value=")(.*\n?)(?=" id)',
	);
	let address = re.exec(text);
	return (address as any)[0];
}
const SocialSecurity = () => {
	const [address, setAddress] = useState("");
	const [input, setInput] = useState("");
	let search = async () => {
		setAddress(await findAddress(input));
	};
	let openMapHandle = () => {
		openMap({ query: address });
	};
	return (
		<NavView>
			<AppHeader title="Social Security" />

			<Text>SS card</Text>
			<Text>Zip Code: {address}</Text>

			<TextInput
				onSubmitEditing={search}
				onChangeText={(newText) => setInput(newText)}
			></TextInput>
			<Button title="Get social security office address" onPress={search} />
			{address != "" && <Button title="Open Map" onPress={openMapHandle} />}
		</NavView>
	);
};

export default SocialSecurity;

const styles = StyleSheet.create({});
