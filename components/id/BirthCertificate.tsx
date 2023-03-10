import React, { useRef, useState } from "react";
import {
	Button,
	Linking,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import HomeButton from "../homepage/HomeButton";
import WebView from "react-native-webview";
import NavView from "../NavView";

const BirthCertificate = () => {
	return (
		<NavView>
			<HomeButton />
			<WebView
				source={{
					uri: "https://www.vitalchek.com/wistorefront/customer/wi/wiHome.xhtml?click_id=592505259768217602&ppc=0",
				}}
				startInLoadingState={true}
				scalesPageToFit={true}
				style={{
					width: "100%",
					height: 700,
				}}
			/>
		</NavView>
	);
};

export default BirthCertificate;

const styles = StyleSheet.create({});
