import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Button, Icon } from "@rneui/base";

interface Props {
	search: (input: string) => void;
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

	return (
		<View style={styles.body}>
			<Button color={"#605b63"}>
				Use Location <Icon name="gps-fixed"></Icon>
			</Button>
			<Text style={styles.orText}>OR</Text>
			<Text style={{ color: "black" }}>Enter ZIP Code</Text>

			<View style={styles.inputView}>
				<TextInput
					onSubmitEditing={() => {
						props.search(input);
					}}
					onChangeText={(newText) => setInput(newText)}
					style={{ color: "black" }}
				></TextInput>
			</View>
			<Button color={"#605b63"}>Submit</Button>
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
