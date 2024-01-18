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
import IDSearcher, { IDResults } from "./IDSearcher";

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
	const [results, setResults] = useState<IDResults>({
		visible: false,
		icon: "check-circle-outline",

		showButton: false,
		title: "",
	});

	let search = async (input: string) => {
		console.log(input);
		try {
			let address = await findAddress(input);
			return {
				visible: true,
				icon: "check-circle-outline",
				showButton: true,
				title: "Found SS Office",
				address: address,
				buttonText: "Open in Maps",
				onClick: () => {
					openMapHandle(address);
				},
			};
		} catch {
			return {
				visible: true,
				icon: "error",
				showButton: false,
				title: "Could Not Find SS Office",
			};
		}
	};

	let openMapHandle = (address: string) => {
		openMap({ query: address });
	};
	return (
		<NavView>
			<AppHeader title="Social Security" />

			<IDSearcher search={search} />
		</NavView>
	);
};

export default SocialSecurity;

const styles = StyleSheet.create({});
