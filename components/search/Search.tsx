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
import { Resource } from "../../model/Resources/Resource";
const Search = () => {
	const navigate = useNavigate();
	const resources = useSelector(selectAllResources);
	const dispatch = useDispatch();
	const DEFAULT_SEARCHABLES: Searchable[] = useMemo(() => {
		let defaultSearchables = [];
		const driversLicenceResult: SearchResult = {
			header: "Drivers Licence",
			description: "Find the nearest DMV to get your drivers licence",
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
						depend.dispatch(setCurrentResource(resource));
						depend.navigate("/resourceScreen");
					},
					{ dispatch: dispatch, navigate: navigate },
				),
			);
		});
		setSearchables([...DEFAULT_SEARCHABLES, ...allResources]);
	}, [resources]);

	return (
		<NavView>
			<AppHeader title="Search" />
			<ScrollView>
				{searchables.map((searchable: Searchable) => {
					return (
						<SearchResultView
							key={searchable.result.header}
							searchable={searchable}
						/>
					);
				})}
			</ScrollView>
		</NavView>
	);
};

export default Search;

const styles = StyleSheet.create({});
