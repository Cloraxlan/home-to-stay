import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
	Agenda,
	AgendaEntry,
	AgendaSchedule,
	DateData,
} from "react-native-calendars";
import HomeButton from "../homepage/HomeButton";
import NavView from "../NavView";
import AppHeader from "../AppHeader";

const Calendar = () => {
	const getCurrentDay = () => {
		let date = new Date();
		let month = date.getUTCMonth() + 1;
		let day = date.getUTCDate();
		let year = date.getUTCFullYear();
		return year + "-" + month + "-" + day;
	};
	const renderItem = (event: AgendaEntry) => {
		return (
			<TouchableOpacity onPress={() => Alert.alert(event.name)}>
				<Text>{event.name}</Text>
			</TouchableOpacity>
		);
	};
	const renderEmptyDate = () => {
		return <Text></Text>;
	};
	return (
		<NavView>
			<AppHeader title="Calendar" />
			<Agenda
				items={{
					"2023-03-09": [
						{ name: "", height: 0, day: "" },

						{ name: "Event in Park", height: 0, day: "" },
						{ name: "Ride To DMV From City Center", height: 20, day: "" },
						{ name: "Event in Park", height: 20, day: "" },
						{ name: "Ride To DMV From City Center", height: 20, day: "" },
					],
					"2023-03-10": [
						{ name: "", height: 0, day: "" },

						{ name: "Ride To DMV From City Center", height: 20, day: "" },
					],
					"2023-03-11": [],
				}}
				selected={getCurrentDay()}
				renderItem={renderItem}
				renderEmptyDate={renderEmptyDate}
				showClosingKnob={false}
			/>
		</NavView>
	);
};

export default Calendar;

const styles = StyleSheet.create({});
