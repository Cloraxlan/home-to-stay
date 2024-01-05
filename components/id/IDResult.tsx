import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Card, Icon, Overlay } from "@rneui/themed";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import { Button, color } from "@rneui/base";
import { IDResults } from "./IDSearcher";
interface Props {
	results: IDResults;
}
const IDResult = (props: Props) => {
	const [visible, setVisible] = useState(props.results.visible);
	useEffect(() => {
		setVisible(props.results.visible);
	}, []);

	const toggleOverlay = () => {
		setVisible(!visible);
	};
	return (
		<Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
			<Text
				onPress={() => {
					setVisible(false);
				}}
				style={{ textAlign: "right", color: "black" }}
			>
				X
			</Text>
			<Card>
				<CardTitle>
					{props.results.title}
					<Icon name={props.results.icon} />
				</CardTitle>
				<Card.Divider />
				{props.results.address && (
					<Text numberOfLines={4} style={{ color: "black" }}>
						Address : {props.results.address}
					</Text>
				)}
				{props.results.visible && (
					<Button onPress={props.results.onClick} color={"#605b63"}>
						{props.results.buttonText}
					</Button>
				)}
			</Card>
		</Overlay>
	);
};

export default IDResult;

const styles = StyleSheet.create({});
