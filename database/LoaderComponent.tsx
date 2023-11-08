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

function LoaderComponent() {
	//Testing
	const dispatch = useDispatch();
	let test = async () => {
		/*let r = await csvLoader();
		console.log(r);

		r.housing.map((h) => {
			dispatch(addResource(h));
		});*/
		let db = await getDBConnection();
		createTable(db);
		await saveResources(db, [new HousingResouce("test", "test1").serialize()]);
		console.log(await getResource(db));
	};
	useEffect(() => {
		test();
	}, []);

	return <React.Fragment></React.Fragment>;
}

export default LoaderComponent;
