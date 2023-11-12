import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addResource } from "../reducers/resourcesSlice";
import {
	createTable,
	csvLoader,
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
		let r = await csvLoader();

		let db = await getDBConnection();
		await createTable(db);
		await saveResources(db, r.housing);
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
