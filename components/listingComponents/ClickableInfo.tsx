import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { Clickable } from "../../model/Clickables/Clickable";

interface Props {
	clickable: Clickable | undefined;
	style: StyleSheet.NamedStyles<{}>;
}
const ClickableInfo = (props: Props) => {
	return (
		<View>
			{props.clickable && (
				<TouchableHighlight
					onPress={() => {
						props.clickable?.open();
					}}
				>
					<Text style={props.style}>{props.clickable.display()}</Text>
				</TouchableHighlight>
			)}
		</View>
	);
};

export default ClickableInfo;

const styles = StyleSheet.create({});
