import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	addResource,
	changeLoadStateForResource,
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
	//Testing
	const dispatch = useDispatch();
	let test = async () => {
		dispatch(changeLoadStateForResource(true));
		let db = await getDBConnection();

		try {
			let r = await fetch(
				"https://62deef47-803b-4f10-9bdb-e8c92a00799c.mock.pstmn.io/",
			);
			let data: SerializedResource[] = readCSV(await r.text());
			console.log(data);
			data.map((resource, i) => {
				data[i].header = Resource.clean(data[i].header);
				data[i].description = Resource.clean(data[i].description);
			});
			await createTable(db);
			await saveResources(db, data);
		} catch {}
		let resources = await getResource(db);
		console.log(resources);
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
