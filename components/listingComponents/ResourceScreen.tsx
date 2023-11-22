import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from "react-native";
import React, { useMemo } from "react";
import { Resource } from "../../model/Resources/Resource";
import AppHeader from "../AppHeader";
import { selectCurrentResource } from "../../reducers/resourcesSlice";
import { useSelector } from "react-redux";
import NavView from "../NavView";
import MenuIcon from "../MenuIcon";
import { Divider, Icon } from "@rneui/base";
import ScreenIcon from "./ScreenIcon";

const ResourceScreen = () => {
	const resource = useSelector(selectCurrentResource);

	const spacing = useMemo(() => {
		let count = 0;
		if (resource.link) {
			count++;
		}
		if (resource.address) {
			count++;
		}
		if (resource.phone) {
			count++;
		}
		if (resource.email) {
			count++;
		}
		return (0.8 / count) * 100;
	}, [resource]);

	return (
		<NavView>
			<AppHeader title={resource.header} />

			<View style={styles.view}>
				<View style={{ flex: 0.8 }}>
					<ScrollView contentContainerStyle={styles.mainBody}>
						<Text style={styles.header} adjustsFontSizeToFit numberOfLines={1}>
							{resource.header}
						</Text>
						<View style={styles.description}>
							<Text>{resource.description}</Text>
						</View>
					</ScrollView>
				</View>
				<View style={styles.menus}>
					<ScreenIcon
						iconName="web"
						iconText="Open Website"
						clickable={resource.link}
						spacing={spacing}
						isUrl
					/>
					<ScreenIcon
						iconName="map"
						iconText="Open in Maps"
						clickable={resource.address}
						spacing={spacing}
					/>
					<ScreenIcon
						iconName="call"
						iconText="Call"
						clickable={resource.phone}
						spacing={spacing}
					/>
					<ScreenIcon
						iconName="mail"
						iconText="Send Email"
						clickable={resource.email}
						spacing={spacing}
					/>
				</View>
			</View>
		</NavView>
	);
};

export default ResourceScreen;

const styles = StyleSheet.create({
	menus: {
		display: "flex",
		flex: 0.2,
		flexDirection: "row",
		backgroundColor: "#4463ff",
	},
	header: {
		fontSize: 30,
	},
	mainBody: {
		display: "flex",
		alignItems: "center",
		alignContent: "center",
		paddingTop: "5%",
	},

	view: {
		flex: 1,
	},
	description: {
		paddingTop: "10%",
		margin: 10,
	},
});
