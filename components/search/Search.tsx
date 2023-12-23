import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import NavView from "../NavView";
import { Searchable, SearchResult } from "../../model/Searchable";
import { NavigateFunction, useNavigate } from "react-router";
import AppHeader from "../AppHeader";
import SearchResultView from "./SearchResultView";
import { useDispatch, useSelector } from "react-redux";
import {
	selectAllResources,
	setCurrentResource,
} from "../../reducers/resourcesSlice";
import { Input } from "@rneui/base";
import MiniSearch from "minisearch";

const Search = () => {
	const navigate = useNavigate();
	const resources = useSelector(selectAllResources);
	const dispatch = useDispatch();
	const [searchBarInput, setSearchBarInput] = useState("");
	const [validSearchables, setValidSearchables] = useState<Searchable[]>([]);
	const DEFAULT_SEARCHABLES: Searchable[] = useMemo(() => {
		let defaultSearchables = [];
		const driversLicenceResult: SearchResult = {
			header: "Drivers Licence",
			description: "Find the nearest DMV to get your drivers licence",
			icon: require("../id/card.png"),
		};
		defaultSearchables.push(
			new Searchable(
				driversLicenceResult,
				(navigate: NavigateFunction) => {
					navigate("/id/license");
				},
				navigate,
			),
		);
		const ssResult: SearchResult = {
			header: "Social Security Card",
			description:
				"Find the nearest Social Security office to get your Social Security Card",
			icon: require("../id/ssn.png"),
		};
		defaultSearchables.push(
			new Searchable(
				ssResult,
				(navigate: NavigateFunction) => {
					navigate("/id/ss");
				},
				navigate,
			),
		);
		const birthCertResult: SearchResult = {
			header: "Birth Certificate",
			description: "Order your birth certificate online",
			icon: require("../id/birth.png"),
		};
		defaultSearchables.push(
			new Searchable(
				birthCertResult,
				(navigate: NavigateFunction) => {
					navigate("/id/birth");
				},
				navigate,
			),
		);
		return defaultSearchables;
	}, []);
	const [searchables, setSearchables] = useState<Searchable[]>([
		...DEFAULT_SEARCHABLES,
	]);
	useEffect(() => {
		let allResources: Searchable[] = [];
		resources.map((resource) => {
			allResources.push(
				new Searchable(
					resource.searchResult,
					(depend) => {
						depend.dispatch(setCurrentResource(resource.serialize()));
						depend.navigate("/resourceScreen");
					},
					{ dispatch: dispatch, navigate: navigate },
				),
			);
		});
		setSearchables([...DEFAULT_SEARCHABLES, ...allResources]);
		console.log(allResources);
	}, [resources]);
	const getSearchDoc = () => {
		let results: SearchResult[] = [];
		searchables.map((searchable, i) => {
			let result = searchable.result;
			result.id = i;
			results.push(result);
		});
		return results;
	};
	useEffect(() => {
		if (searchBarInput != "") {
			let miniSearch = new MiniSearch({
				fields: ["header", "description"],
				storeFields: ["header", "description"],
			});

			miniSearch.addAll(getSearchDoc());
			let results = miniSearch.search(searchBarInput);
			let validHeaders = results.map((result) => {
				return result.header;
			});
			let validResults = searchables.filter((searchable) => {
				return validHeaders.includes(searchable.result.header);
			});
			setValidSearchables(validResults);
		} else {
			setValidSearchables(searchables);
		}
	}, [searchBarInput, searchables]);

	return (
		<NavView>
			<AppHeader title="Search" />
			<View style={styles.view}>
				<Input
					onChange={(value) => {
						setSearchBarInput(value.nativeEvent.text);
					}}
					leftIcon={{ type: "material", name: "search" }}
				/>
				<ScrollView>
					{validSearchables.map((searchable: Searchable) => {
						return (
							<SearchResultView
								key={searchable.result.header}
								searchable={searchable}
							/>
						);
					})}
					<Text style={{ padding: "50%" }}></Text>
				</ScrollView>
			</View>
		</NavView>
	);
};

export default Search;

const styles = StyleSheet.create({
	view: {
		backgroundColor: "#fe994e4d",
	},
});
