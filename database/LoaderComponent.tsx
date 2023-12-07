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
				"https://4ec61d19-4ecc-45e0-8c85-6960b7d82cef.mock.pstmn.io",
			);
			let data: SerializedResource[] = await r.json();
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
