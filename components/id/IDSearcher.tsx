import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Button, Card, Icon, Overlay } from "@rneui/base";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import GetLocation from "react-native-get-location";

interface Props {
	search: (input: string) => Promise<IDResults>;
}
export interface IDResults {
	visible: boolean;
	title: string;
	showButton: boolean;
	buttonText?: string;
	onClick?: () => void;
	address?: string;
	icon: string;
}
const IDSearcher = (props: Props) => {
	const [input, setInput] = useState("");
	let emptyResults = {
		visible: false,
		title: "",
		showButton: false,
		icon: "",
	};
	let gpsError = {
		visible: true,
		title: "Cannot Read GPS",
		showButton: false,
		icon: "error",
	};
	const [results, setResults] = useState<IDResults>(emptyResults);
	const toggleOverlay = () => {
		setResults(emptyResults);
	};
	const submit = async () => {
		setResults(await props.search(input));
		setInput("");
	};
	const apiKey = "65a89d8bf07fe304574448idl97a7ed";
	const runGps = () => {
		try {
			GetLocation.getCurrentPosition({
				enableHighAccuracy: true,
				timeout: 5000,
			}).then(async (loc) => {
				let fetchZip = await fetch(
					"https://nominatim.openstreetmap.org/reverse?format=json&lat=" +
						loc.latitude +
						"&lon=" +
						loc.longitude +
						"&api_key=65a89d8bf07fe304574448idl97a7ed",
				);

				let fetchResults = await fetchZip.json();
				console.log(input);
				setInput(fetchResults.address.postcode);
				console.log(input);

				submit();
			});
		} catch {
			setResults(gpsError);
		}
	};
	return (
		<View style={styles.body}>
			<Button onPress={runGps} color={"#605b63"}>
				Use Location <Icon name="gps-fixed"></Icon>
			</Button>
			<Text style={styles.orText}>OR</Text>
			<Text style={{ color: "black" }}>Enter ZIP Code</Text>

			<View style={styles.inputView}>
				<TextInput
					onSubmitEditing={() => {
						submit();
					}}
					onChangeText={(newText) => setInput(newText)}
					style={{ color: "black" }}
				></TextInput>
			</View>
			<Button
				onPress={() => {
					submit();
				}}
				color={"#605b63"}
			>
				Submit
			</Button>
			<Overlay isVisible={results.visible} onBackdropPress={toggleOverlay}>
				<Text
					onPress={() => {
						toggleOverlay();
					}}
					style={{ textAlign: "right", color: "black" }}
				>
					X
				</Text>
				<Card>
					<CardTitle>
						{results.title}
						<Icon name={results.icon} />
					</CardTitle>
					<Card.Divider />
					{results.address && (
						<Text numberOfLines={4} style={{ color: "black" }}>
							Address : {results.address}
						</Text>
					)}
					{results.visible && (
						<Button onPress={results.onClick} color={"#605b63"}>
							{results.buttonText}
						</Button>
					)}
				</Card>
			</Overlay>
		</View>
	);
};

export default IDSearcher;

const styles = StyleSheet.create({
	body: {
		margin: "5%",
	},
	orText: {
		textAlign: "center",
		fontWeight: "bold",
		color: "black",
		fontSize: 25,
		margin: "3%",
	},
	inputView: {
		backgroundColor: "white",
	},
});
