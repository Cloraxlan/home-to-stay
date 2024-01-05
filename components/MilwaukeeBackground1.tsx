import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const MilwaukeeBackground1 = ({ children }: any) => {
	return (
		<ImageBackground source={require("./bg5.jpg")} resizeMode="cover">
			{children}
		</ImageBackground>
	);
};

export default MilwaukeeBackground1;

const styles = StyleSheet.create({});
