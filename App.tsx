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
import { ResourceType } from "./model/Resources/Resource";
import ResourceScreen from "./components/listingComponents/ResourceScreen";

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
							<Route path="/calendar" element={<Calendar />} />
							<Route path="/banking" element={<Banking />} />
							<Route
								path="/education"
								element={
									<ResourcePage
										name="Education"
										selector={selectResources(ResourceType.EDUCATION)}
									/>
								}
							/>
							<Route
								path="/food/*"
								element={
									<ResourcePage
										name="Food"
										selector={selectResources(ResourceType.FOOD)}
									/>
								}
							/>
							<Route
								path="/healthcare"
								element={
									<ResourcePage
										name="Healthcare"
										selector={selectResources(ResourceType.HEALTHCARE)}
									/>
								}
							/>
							<Route
								path="/housing"
								element={
									<ResourcePage
										name="Housing"
										selector={selectResources(ResourceType.HOUSING)}
									/>
								}
							/>
							<Route path="/id/*" element={<Identification />} />
							<Route
								path="/jobs"
								element={
									<ResourcePage
										name="Jobs"
										selector={selectResources(ResourceType.JOB)}
									/>
								}
							/>
							<Route
								path="/services"
								element={
									<ResourcePage
										name="Services"
										selector={selectResources(ResourceType.SERVICE)}
									/>
								}
							/>
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
