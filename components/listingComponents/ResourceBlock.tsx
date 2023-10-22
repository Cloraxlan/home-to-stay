import {
	Button,
	Image,
	ImageSourcePropType,
	StyleSheet,
	Text,
	View,
	Linking,
} from "react-native";
import React from "react";
import { Resource } from "../../model/Resources/Resource";
import ClickableInfo from "./ClickableInfo";
import { Card } from "@rneui/base";

interface Props {
	resource: Resource;
}
//A single generic listing for something like a job or housing
const ResourceBlock = (props: Props) => {
	return (
		<View style={styles.listing}>
			<Card>
				<Card.Image
					style={styles.iconStyle}
					source={props.resource.icon}
				></Card.Image>
				<Card.Title>{props.resource.header}</Card.Title>
				<Card.Divider />
				<Text>{props.resource.description}</Text>
				<Card.Divider />
				<ClickableInfo
					style={styles.infoText}
					clickable={props.resource.address}
				/>
				<ClickableInfo
					style={styles.infoText}
					clickable={props.resource.phone}
				/>

				<ClickableInfo
					style={styles.infoText}
					clickable={props.resource.link}
				/>

				<ClickableInfo
					style={styles.infoText}
					clickable={props.resource.email}
				/>
			</Card>
		</View>
	);
};

export default ResourceBlock;

const styles = StyleSheet.create({
	listing: {
		padding: 20,
		width: "100%",
	},

	headerText: {
		fontSize: 40,
		marginLeft: 5,
	},
	iconStyle: {
		width: 40,
		height: 40,
	},
	bodyText: {
		color: "white",
	},
	infoText: {
		fontWeight: "bold",
		fontSize: 10,
	},
});
