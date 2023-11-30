import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { Resource } from "../../model/Resources/Resource";
import ClickableInfo from "./ClickableInfo";
import { Button, Card, Icon } from "@rneui/base";
import { useDispatch } from "react-redux";
import { setCurrentResource } from "../../reducers/resourcesSlice";
import { useNavigate } from "react-router";

interface Props {
	resource: Resource;
	displayContact?: boolean;
}
//A single generic listing for something like a job or housing
const ResourceBlock = (props: Props) => {
	const dispatch = useDispatch();
	let navigate = useNavigate();

	return (
		<View style={styles.listing}>
			<Card>
				<Card.Image
					style={styles.iconStyle}
					source={props.resource.icon}
				></Card.Image>
				<Card.Title>{props.resource.header}</Card.Title>

				<Text numberOfLines={5}>{props.resource.description}</Text>

				<Card.Divider style={{ paddingTop: 20 }} />
				<TouchableHighlight
					onPress={() => {
						dispatch(setCurrentResource(props.resource.serialize()));
						navigate("/resourceScreen");
					}}
				>
					<View>
						<Icon type="material" name="expand-more"></Icon>
						<Text
							style={styles.expandText}
							numberOfLines={1}
							adjustsFontSizeToFit
						>
							Expand
						</Text>
					</View>
				</TouchableHighlight>
				{props.displayContact && (
					<React.Fragment>
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
					</React.Fragment>
				)}
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
		color: "black",
	},
	infoText: {
		fontWeight: "bold",
		fontSize: 10,
		color: "black",
	},
	expandText: { textAlign: "center", fontSize: 12, fontWeight: "bold" },
});
