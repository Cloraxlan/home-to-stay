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
import Education from "./components/education/Education";
import Food from "./components/food/Food";
import Healthcare from "./components/healthcare/Healthcare";
import Homepage from "./components/homepage/Homepage";
import Housing from "./components/housing/Housing";
import Identification from "./components/id/Identification";
import Jobs from "./components/jobs/Jobs";
import Services from "./components/services/Services";
import { Provider } from "react-redux";
import { store } from "./store";
import { csvLoader } from "./database/loader";
import LoaderComponent from "./database/LoaderComponent";

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
				<LoaderComponent />
				<ScrollView contentInsetAdjustmentBehavior="automatic">
					<NativeRouter>
						<View>
							<Routes>
								<Route path="/" element={<Homepage />} />
								<Route path="/calendar" element={<Calendar />} />
								<Route path="/banking" element={<Banking />} />
								<Route path="/education" element={<Education />} />
								<Route path="/food/*" element={<Food />} />
								<Route path="/healthcare" element={<Healthcare />} />
								<Route path="/housing" element={<Housing />} />
								<Route path="/id/*" element={<Identification />} />
								<Route path="/jobs" element={<Jobs />} />
								<Route path="/services" element={<Services />} />
							</Routes>
						</View>
					</NativeRouter>
				</ScrollView>
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
});

export default App;
