import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { Searchable, SearchResult } from "../../model/Searchable";
import { Card, Icon } from "@rneui/base";

interface Props {
	searchable: Searchable;
}
const SearchResultView = (props: Props) => {
	return (
		<View style={styles.listing}>
			<Card>
				<Card.Image
					style={styles.iconStyle}
					source={props.searchable.result.icon}
				></Card.Image>
				<Card.Title>{props.searchable.result.header}</Card.Title>

				<Text numberOfLines={5}>{props.searchable.result.description}</Text>

				<Card.Divider style={{ paddingTop: 20 }} />
				<TouchableHighlight
					onPress={() => {
						props.searchable.open();
					}}
				>
					<View>
						<Icon type="material" name="expand-more"></Icon>
						<Text
							style={styles.expandText}
							numberOfLines={1}
							adjustsFontSizeToFit
						>
							Expand
						</Text>
					</View>
				</TouchableHighlight>
			</Card>
		</View>
	);
};

export default SearchResultView;

const styles = StyleSheet.create({
	listing: {
		padding: 20,
		width: "100%",
	},

	headerText: {
		fontSize: 40,
		marginLeft: 5,
	},
	iconStyle: {
		width: 40,
		height: 40,
	},
	bodyText: {
		color: "black",
	},
	infoText: {
		fontWeight: "bold",
		fontSize: 10,
		color: "black",
	},
	expandText: { textAlign: "center", fontSize: 12, fontWeight: "bold" },
});
