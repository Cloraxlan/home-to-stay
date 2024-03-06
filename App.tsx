/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from "react-native";

import { Colors, Header } from "react-native/Libraries/NewAppScreen";
import { NativeRouter, Route, Routes } from "react-router-native";
import Banking from "./components/banking/Banking";
import Calendar from "./components/calendar/Calendar";
import Homepage from "./components/homepage/Homepage";
import Identification from "./components/id/Identification";

import { Provider } from "react-redux";
import { store } from "./store";
import LoaderComponent from "./database/LoaderComponent";
import ResourcePage from "./components/listingComponents/ResourcePage";
import { selectResources } from "./reducers/resourcesSlice";
import { ResourceMap, ResourceType } from "./model/Resources/Resource";
import ResourceScreen from "./components/listingComponents/ResourceScreen";
import ResourceSite from "./components/listingComponents/ResourceSite";
import Search from "./components/search/Search";

/*const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text> 
    </View>
  );
};*/

const App = () => {
	const isDarkMode = useColorScheme() === "dark";
	let menus = [];
	for (let resource in ResourceMap) {
		menus.push({
			name: resource,
			//@ts-ignore
			resource: ResourceMap[resource],
			link: "/" + resource,
		});
	}
	return (
		<Provider store={store}>
			<SafeAreaView>
				<StatusBar />
				<NativeRouter>
					<View style={styles.background}>
						<LoaderComponent />
						<Routes>
							<Route path="/" element={<Homepage />} />
							<Route path="/resourceScreen" element={<ResourceScreen />} />
							<Route path="/resourceSite" element={<ResourceSite />} />
							<Route path="/search" element={<Search />} />

							{menus.map((resource) => {
								return (
									<Route
										key={resource.name}
										path={resource.link}
										element={
											<ResourcePage
												name={resource.name}
												selector={selectResources(resource.resource)}
											/>
										}
									/>
								);
							})}
						</Routes>
					</View>
				</NativeRouter>
			</SafeAreaView>
		</Provider>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: "600",
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: "400",
	},
	highlight: {
		fontWeight: "700",
	},
	background: {
		backgroundColor: "white",
	},
});

export default App;
