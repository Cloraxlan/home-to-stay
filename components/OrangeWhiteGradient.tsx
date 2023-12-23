import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

const OrangeWhiteGradient = ({ children }: any) => {
	return (
		<LinearGradient colors={["#fe994e", "#605b63"]} start={{ x: 0.5, y: 0.5 }}>
			{children}
		</LinearGradient>
	);
};

export default OrangeWhiteGradient;

const styles = StyleSheet.create({});
