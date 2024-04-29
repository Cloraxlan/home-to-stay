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
import {
	Resource,
	ResourceType,
	SerializedResource,
} from "../model/Resources/Resource";

function LoaderComponent() {
	const srcFile =
		"https://docs.google.com/spreadsheets/d/1-k8NWi3iwUm-7rm13GPhTzwDHOd-xhCon1i2ty9dy64/export?format=csv&id=1-k8NWi3iwUm-7rm13GPhTzwDHOd-xhCon1i2ty9dy64";
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
