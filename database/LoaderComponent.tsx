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
import { Resource } from "../model/Resources/Resource";

function LoaderComponent() {
	//Testing
	const dispatch = useDispatch();
	let test = async () => {
		dispatch(changeLoadStateForResource(true));
		let db = await getDBConnection();

		try {
			let r = await fetch(
				"https://3ea5f85e-7c2e-4464-a42d-bea038fe11af.mock.pstmn.io",
			);
			let data = await r.json();
			await createTable(db);
			await saveResources(db, data);
		} catch {}
		let resources = await getResource(db);
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
