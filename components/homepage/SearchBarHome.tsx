import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SearchBar } from "@rneui/base";
import { Searchable } from "../../model/Searchable";

interface Props {
	setSearchBool: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBarHome = (props: Props) => {
	const [search, setSearch] = useState("");
	return (
		<View>
			<SearchBar
				inputStyle={styles.input}
				inputContainerStyle={styles.bar}
				containerStyle={styles.bar}
				placeholder="Search Here..."
				onChangeText={(change) => {
					setSearch(change);
					if (search != "") {
						props.setSearchBool(true);
					} else {
						props.setSearchBool(false);
					}
				}}
				value={search}
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
	input: {
		height: 41,
		backgroundColor: "#D9D9D933",
	},
});
