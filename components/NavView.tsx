import { useBackHandler } from "@react-native-community/hooks";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigate } from "react-router-native";

interface Props {
	children: any[] | any;
}
//View that adds relevant controlls such as back button
const NavView = (props: Props) => {
	let navigate = useNavigate();
	useBackHandler(() => {
		navigate(-1);
		return true;
	});
	return <View style={styles.view}>{props.children}</View>;
};

export default NavView;

const styles = StyleSheet.create({
	view: {
		height: "100%",
	},
});
