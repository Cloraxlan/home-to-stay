import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addResource } from "../reducers/resourcesSlice";

import {
	createTable,
	getDBConnection,
	getResource,
	saveResources,
} from "./loader";
import { HousingResouce } from "../model/Resources/HousingResource";
import { Resource } from "../model/Resources/Resource";

function LoaderComponent() {
	//Testing
	const dispatch = useDispatch();
	let test = async () => {
		let r = await fetch(
			"https://e5d5d0c5-eab0-473b-b8a3-d237b9a70c60.mock.pstmn.io",
		);
		let data = await r.json();
		let db = await getDBConnection();
		await createTable(db);
		await saveResources(db, data);
		let resources = await getResource(db);
		resources.map((resource) => {
			dispatch(addResource(resource));
		});
	};
	useEffect(() => {
		test();
	}, []);

	return <React.Fragment></React.Fragment>;
}

export default LoaderComponent;
