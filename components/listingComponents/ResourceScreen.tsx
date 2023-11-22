import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from "react-native";
import React from "react";
import { Resource } from "../../model/Resources/Resource";
import AppHeader from "../AppHeader";
import { selectCurrentResource } from "../../reducers/resourcesSlice";
import { useSelector } from "react-redux";
import NavView from "../NavView";
import MenuIcon from "../MenuIcon";
import { Divider, Icon } from "@rneui/base";

const ResourceScreen = () => {
	const resource = useSelector(selectCurrentResource);
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
					<TouchableHighlight
						style={styles.icon}
						onPress={() => {
							resource.link?.open();
						}}
					>
						<React.Fragment>
							<Icon color={"white"} type="material" name="web" />
							<Text
								style={styles.iconText}
								adjustsFontSizeToFit
								numberOfLines={1}
							>
								Open Website
							</Text>
						</React.Fragment>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.icon}
						onPress={() => {
							resource.address?.open();
						}}
					>
						<React.Fragment>
							<Icon color={"white"} type="material" name="map" />
							<Text
								style={styles.iconText}
								adjustsFontSizeToFit
								numberOfLines={1}
							>
								Open in Maps
							</Text>
						</React.Fragment>
					</TouchableHighlight>

					<TouchableHighlight
						style={styles.icon}
						onPress={() => {
							resource.phone?.open();
						}}
					>
						<React.Fragment>
							<Icon color={"white"} type="material" name="call" />
							<Text
								style={styles.iconText}
								adjustsFontSizeToFit
								numberOfLines={1}
							>
								Call
							</Text>
						</React.Fragment>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.icon}
						onPress={() => {
							resource.email?.open();
						}}
					>
						<React.Fragment>
							<Icon color={"white"} type="material" name="mail" />
							<Text
								style={styles.iconText}
								adjustsFontSizeToFit
								numberOfLines={1}
							>
								Send Email
							</Text>
						</React.Fragment>
					</TouchableHighlight>
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
	icon: {
		width: "20%",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: "2.5%",
		marginRight: "2.5%",
	},
	iconText: {
		textAlign: "center",
		fontSize: 12,
		color: "white",
	},
	view: {
		flex: 1,
	},
	description: {
		paddingTop: "10%",
		margin: 10,
	},
});
