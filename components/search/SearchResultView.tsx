import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Searchable, SearchResult } from "../../model/Searchable";

interface Props {
	searchable: Searchable;
}
const SearchResultView = (props: Props) => {
	return (
		<View>
			<Text>{props.searchable.result.header}</Text>
		</View>
	);
};

export default SearchResultView;

const styles = StyleSheet.create({});
