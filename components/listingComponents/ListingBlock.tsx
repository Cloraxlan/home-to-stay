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
export interface Listing {
	icon: ImageSourcePropType;
	header: string;
	body: string;
	address?: string;
	phone?: string;
	website?: string;
}
interface Props {
	resource: Resource;
}
//A single generic listing for something like a job or housing
const ResourceBlock = (props: Props) => {
	const openWebsite = () => {
		if (props.resource.link) {
			props.resource.link.open();
		}
	};
	return (
		<View style={styles.listing}>
			<View style={styles.listingHeader}>
				<Image style={styles.iconStyle} source={props.resource.icon} />
				<Text numberOfLines={1} adjustsFontSizeToFit style={styles.headerText}>
					{props.resource.header}
				</Text>
			</View>
			<View style={styles.listingBody}>
				<Text style={styles.bodyText}>{props.resource.description}</Text>
				{props.resource.address && (
					<Text style={styles.infoText}>{props.resource.address.display}</Text>
				)}
				{props.resource.phone && (
					<Text style={styles.infoText}>
						{props.resource.phone.phoneNumber}
					</Text>
				)}
				{props.resource.link && (
					<Text style={styles.infoText}>{props.resource.link.url}</Text>
				)}
			</View>
		</View>
	);
};

export default ResourceBlock;

const styles = StyleSheet.create({
	listing: {
		padding: 20,
	},
	listingBody: {
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
		width: "80%",
		height: 400,
		backgroundColor: "gray",
		paddingLeft: 30,
		paddingRight: 30,
	},
	listingHeader: {
		display: "flex",
		flexDirection: "row",
		//width: "80%",
		backgroundColor: "blue",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingLeft: 30,
		height: 40,
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
		fontSize: 25,
	},
});
