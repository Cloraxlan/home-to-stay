import {
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from "react-native";
import React from "react";
import { Resource } from "../../model/Resources/Resource";
import ClickableInfo from "./ClickableInfo";
import { Button, Card, Icon } from "@rneui/base";
import { useDispatch } from "react-redux";
import { setCurrentResource } from "../../reducers/resourcesSlice";
import { useNavigate } from "react-router";
import { Shadow } from "react-native-shadow-2";

interface Props {
	resource: Resource;
	displayContact?: boolean;
}
//A single generic listing for something like a job or housing
const ResourceBlock = (props: Props) => {
	const dispatch = useDispatch();
	let navigate = useNavigate();

	return (
		<Shadow style={styles.listings}>
			<View>
				<Image style={styles.logo} source={props.resource.icon} />
			</View>
			<View style="leftContent">
				<Text>Test</Text>
			</View>
		</Shadow>
	);
};

export default ResourceBlock;

const styles = StyleSheet.create({
	listings: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "white",
		marginTop: 51,
		width: "90%",
		height: 140,
	},
	logo: {
		width: 50,
		height: 50,
		margin: 5,
	},
	leftContent: {
		width: "80%",
	},
});
