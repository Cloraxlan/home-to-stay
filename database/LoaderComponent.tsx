import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	addResource,
	addResourceBulk,
	changeLoadStateForResource,
	clearResources,
} from "../reducers/resourcesSlice";

import {
	createTable,
	getDBConnection,
	getResource,
	readCSV,
	reset,
	saveResources,
} from "./loader";
import { Resource, SerializedResource } from "../model/Resources/Resource";

function LoaderComponent() {
	const srcFile =
		"https://docs.google.com/spreadsheets/d/1RJ1X3nlPs3I2aXsdYQkwizf37KXaSNK5ZAHLI_8pS0s/export?format=csv&id=1RJ1X3nlPs3I2aXsdYQkwizf37KXaSNK5ZAHLI_8pS0s";
	//Testing
	const dispatch = useDispatch();
	let test = async () => {
		dispatch(changeLoadStateForResource(true));
		let db = await getDBConnection();
		try {
			let r = await fetch(srcFile);
			let data: SerializedResource[] = await readCSV(await r.text());

			await createTable(db);
			await saveResources(db, data);
		} catch (e) {
			console.log(e);
		}
		let resources = await getResource(db);
		console.log(resources);
		dispatch(clearResources(false));

		dispatch(addResourceBulk(resources));
		dispatch(changeLoadStateForResource(false));
	};
	useEffect(() => {
		test();
	}, []);

	return <React.Fragment></React.Fragment>;
}

export default LoaderComponent;
