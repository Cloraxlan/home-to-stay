import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SearchBar } from "@rneui/base";
import { Searchable } from "../../model/Searchable";

interface Props {
	setSearchBool: React.Dispatch<React.SetStateAction<boolean>>;
	setSearchBarInput: React.Dispatch<React.SetStateAction<string>>;
	searchBarInput: string;
}

const SearchBarHome = (props: Props) => {
	const reset = () => {
		props.setSearchBool(false);
		props.setSearchBarInput("");
	};
	return (
		<View>
			<SearchBar
				inputStyle={styles.input}
				inputContainerStyle={styles.bar}
				containerStyle={styles.container}
				placeholder="Search Here..."
				onChangeText={(change) => {
					props.setSearchBarInput(change);
					if (change != "") {
						props.setSearchBool(true);
					} else {
						props.setSearchBool(false);
					}
				}}
				onClear={reset}
				onCancel={reset}
				value={props.searchBarInput}
			/>
		</View>
	);
};

export default SearchBarHome;

const styles = StyleSheet.create({
	bar: {
		width: "100%",
		backgroundColor: "#D9D9D933",
		borderTopColor: "white",
		borderBottomColor: "white",
	},
	container: {
		width: "100%",
		backgroundColor: "white",
		borderTopColor: "white",
		borderBottomColor: "white",
	},
	input: {
		height: 41,
		backgroundColor: "#D9D9D933",
	},
});
