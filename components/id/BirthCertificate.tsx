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
import AppHeader from "../AppHeader";

const BirthCertificate = () => {
	return (
		<NavView>
			<AppHeader title="Birth Certificate" />
			<WebView
				source={{
					uri: "https://www.vitalchek.com/wistorefront/customer/wi/wiProductSelect.xhtml",
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
