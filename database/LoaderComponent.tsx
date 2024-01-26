import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	addResource,
	changeLoadStateForResource,
	clearResources,
} from "../reducers/resourcesSlice";

import {
	createTable,
	getDBConnection,
	getResource,
	readCSV,
	saveResources,
} from "./loader";
import { Resource, SerializedResource } from "../model/Resources/Resource";

function LoaderComponent() {
	const srcFile =
		"https://docs.google.com/spreadsheets/d/14WjrSYWUGwZEL8aMpOygZEhOBt4iDlIhuHvhniwUQ-g/export?format=csv&id=14WjrSYWUGwZEL8aMpOygZEhOBt4iDlIhuHvhniwUQ-g&gid=0";
	//Testing
	const dispatch = useDispatch();
	let test = async () => {
		dispatch(changeLoadStateForResource(true));
		let db = await getDBConnection();

		try {
			let r = await fetch(srcFile);
			let data: SerializedResource[] = await readCSV(await r.text());
			data.map((resource, i) => {
				data[i].header = Resource.clean(data[i].header);
				data[i].description = Resource.clean(data[i].description);
			});
			await createTable(db);
			await saveResources(db, data);
		} catch (e) {
			console.log(e);
		}
		let resources = await getResource(db);
		console.log(resources);
		dispatch(clearResources(false));

		resources.map((resource) => {
			dispatch(addResource(resource));
		});
		dispatch(changeLoadStateForResource(false));
	};
	useEffect(() => {
		test();
	}, []);

	return <React.Fragment></React.Fragment>;
}

export default LoaderComponent;
