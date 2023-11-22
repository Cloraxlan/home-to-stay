import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { Clickable } from "../../model/Clickables/Clickable";
import { URL } from "../../model/Clickables/URL";
import { useNavigate } from "react-router";
interface Props {
	spacing: number;
	clickable: Clickable | undefined;
	isUrl?: boolean;
	iconName: string;
	iconText: string;
}
const ScreenIcon = (props: Props) => {
	styles.icon.width = props.spacing + "%";
	const navigate = useNavigate();
	return (
		<React.Fragment>
			{props.clickable && (
				<TouchableHighlight
					style={styles.icon}
					onPress={() => {
						console.log(typeof props.clickable);
						if (props.isUrl) {
							navigate("/resourceSite");
						} else {
							props.clickable?.open();
						}
					}}
				>
					<React.Fragment>
						<Icon color={"white"} type="material" name={props.iconName} />
						<Text
							style={styles.iconText}
							adjustsFontSizeToFit
							numberOfLines={1}
						>
							{props.iconText}
						</Text>
					</React.Fragment>
				</TouchableHighlight>
			)}
		</React.Fragment>
	);
};

export default ScreenIcon;

const styles = StyleSheet.create({
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
});
