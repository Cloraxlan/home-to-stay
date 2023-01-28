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
export interface Listing {
	icon: ImageSourcePropType;
	header: string;
	body: string;
	address?: string;
	phone?: string;
	website?: string;
}
interface Props {
	listing: Listing;
}
const ListingBlock = (props: Props) => {
	const openWebsite = () => {
		if (props.listing.website) {
			Linking.openURL(props.listing.website);
		}
	};
	return (
		<View style={styles.listing}>
			<View style={styles.listingHeader}>
				<Image style={styles.iconStyle} source={props.listing.icon} />
				<Text numberOfLines={1} adjustsFontSizeToFit style={styles.headerText}>
					{props.listing.header}
				</Text>
			</View>
			<View style={styles.listingBody}>
				<Text style={styles.bodyText}>{props.listing.body}</Text>
				<Text style={styles.infoText}>{props.listing.address}</Text>
				<Text style={styles.infoText}>{props.listing.phone}</Text>
				{props.listing.website != undefined && (
					<Button onPress={openWebsite} title="Website" />
				)}
			</View>
		</View>
	);
};

export default ListingBlock;

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
