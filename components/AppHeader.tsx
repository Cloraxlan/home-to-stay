import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, Icon } from "@rneui/themed";
import { useNavigate } from "react-router";

interface Props {
	title: string;
}

const AppHeader = (props: Props) => {
	let navigate = useNavigate();

	return (
		<Header
			backgroundColor="#4463ff"
			backgroundImageStyle={{}}
			barStyle="default"
			centerComponent={{
				text: props.title,
				style: { color: "#fff" },
			}}
			centerContainerStyle={{}}
			leftComponent={{
				icon: "arrow-back",
				color: "#fff",
				onPress: (e) => {
					navigate(-1);
				},
			}}
			leftContainerStyle={{}}
			linearGradientProps={{}}
			placement="center"
			rightComponent={{
				icon: "home",
				color: "#fff",
				onPress: (e) => {
					navigate("/");
				},
			}}
			rightContainerStyle={{}}
			statusBarProps={{}}
		/>
	);
};
export default AppHeader;
