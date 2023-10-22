import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { Clickable } from "../../model/Clickables/Clickable";
import { Card } from "@rneui/base";

interface Props {
	clickable: Clickable | undefined;
	style: StyleSheet.NamedStyles<{}>;
}
const ClickableInfo = (props: Props) => {
	return (
		<View>
			{props.clickable && (
				<View>
					<Text>{props.clickable.type}:</Text>
					<TouchableHighlight
						onPress={() => {
							props.clickable?.open();
						}}
					>
						<Text style={props.style}>{props.clickable.display()}</Text>
					</TouchableHighlight>
					<Card.Divider />
				</View>
			)}
		</View>
	);
};

export default ClickableInfo;

const styles = StyleSheet.create({});
