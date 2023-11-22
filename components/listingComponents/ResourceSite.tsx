import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import NavView from "../NavView";
import { useSelector } from "react-redux";
import { selectCurrentResource } from "../../reducers/resourcesSlice";
import AppHeader from "../AppHeader";

const ResourceSite = () => {
	const { height } = Dimensions.get("window");
	const resource = useSelector(selectCurrentResource);

	return (
		<NavView>
			<AppHeader title={resource.header} />
			{resource.link && (
				<WebView
					source={{
						uri: resource.link?.display(),
					}}
					startInLoadingState={true}
					scalesPageToFit={true}
					style={{
						width: "100%",
						height: height,
					}}
				/>
			)}
			{!resource.link && <Text>Cannot Access Website</Text>}
		</NavView>
	);
};

export default ResourceSite;

const styles = StyleSheet.create({});
