import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../homepage/HomeButton";
import MenuTab from "../MenuTab";
import NavView from "../NavView";
import AppHeader from "../AppHeader";
import Background from "../Background";

const IdHome = () => {
	return (
		<NavView>
			<Background>
				<View style={styles.menu}>
					<AppHeader title="Identification" />

					<MenuTab
						menus={[
							{
								name: "Social Security",
								link: "/id/ss",
							},
						]}
					/>
					<MenuTab
						menus={[
							{
								name: "Drivers Licence",
								link: "/id/license",
							},
						]}
					/>
					<MenuTab
						menus={[
							{
								name: "Birth Certificate",
								link: "/id/birth",
							},
						]}
					/>
				</View>
			</Background>
		</NavView>
	);
};

export default IdHome;

const styles = StyleSheet.create({
	menu: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: "100%",
		alignItems: "center",
	},
});
