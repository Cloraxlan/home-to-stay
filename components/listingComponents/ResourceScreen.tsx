import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from "react-native";
import React, { useMemo, useState } from "react";
import { Resource } from "../../model/Resources/Resource";
import AppHeader from "../AppHeader";
import { selectCurrentResource } from "../../reducers/resourcesSlice";
import { useSelector } from "react-redux";
import NavView from "../NavView";
import MenuIcon from "../MenuIcon";
import { Button, Card, Divider, Icon, Image } from "@rneui/base";
import { Overlay } from "@rneui/themed";
import ScreenIcon from "./ScreenIcon";
import ContactCard from "./ContactCard";

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
	const [visible, setVisible] = useState(false);

	const toggleOverlay = () => {
		setVisible(!visible);
	};
	return (
		<React.Fragment>
			<NavView>
				<AppHeader title={resource.header} />

				<View style={styles.view}>
					<View style={{ flex: 0.8 }}>
						<ScrollView contentContainerStyle={styles.mainBody}>
							<View style={styles.headerView}>
								<Image
									style={{ resizeMode: "contain" }}
									source={resource.icon}
								/>
								<View></View>
							</View>

							<Card containerStyle={styles.card}>
								<Card.Image
									style={styles.iconStyle}
									source={resource.icon}
								></Card.Image>
								<Card.Title>
									<Text
										style={styles.header}
										adjustsFontSizeToFit
										numberOfLines={1}
									>
										{resource.header}
									</Text>
								</Card.Title>

								<Card.Divider />
								<View style={styles.description}>
									<Text style={styles.desciptionText}>
										{resource.description}
									</Text>
								</View>
								<Card.Divider />
								<Card.FeaturedSubtitle style={{ textAlign: "center" }}>
									<Button
										onPress={() => {
											setVisible(true);
										}}
									>
										Press for Contact Info
									</Button>
								</Card.FeaturedSubtitle>
							</Card>
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
			<Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
				<Text
					onPress={() => {
						setVisible(false);
					}}
					style={{ textAlign: "right", color: "black" }}
				>
					X
				</Text>
				<ContactCard resource={resource} />
			</Overlay>
		</React.Fragment>
	);
};

export default ResourceScreen;

const styles = StyleSheet.create({
	menus: {
		display: "flex",
		flex: 0.2,
		flexDirection: "row",
		backgroundColor: "#fe994e",
	},
	headerView: {
		backgroundColor: "black",
		flexDirection: "row",
	},
	header: {
		fontSize: 30,
		fontWeight: "bold",
		color: "black",
	},
	mainBody: {
		display: "flex",
		alignItems: "center",
		alignContent: "center",
	},
	card: {
		width: "100%",
		height: "100%",
	},
	view: {
		flex: 1,
	},
	description: {
		margin: 10,
		backgroundColor: "white",
		paddingBottom: "25%",
	},
	desciptionText: {
		color: "black",
	},
	contactText: {
		color: "blue",
		backgroundColor: "gray",
		textAlign: "center",
	},
	iconStyle: {
		width: 40,
		height: 40,
	},
});
