import React, { useEffect, useRef, useState } from "react";
import {
	Button,
	Dimensions,
	Linking,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import HomeButton from "../homepage/HomeButton";
import WebView from "react-native-webview";
import NavView from "../NavView";
import AppHeader from "../AppHeader";

const BirthCertificate = () => {
	const { height } = Dimensions.get("window");

	return (
		<NavView>
			<AppHeader title="Birth Certificate" />
			<WebView
				source={{
					uri: "https://www.vitalchek.com/wistorefront/customer/wi/wiHome.xhtml?click_id=592505259768217602&ppc=0",
				}}
				startInLoadingState={true}
				scalesPageToFit={true}
				style={{
					width: "100%",
					height: height,
				}}
			/>
		</NavView>
	);
};

export default BirthCertificate;

const styles = StyleSheet.create({});
