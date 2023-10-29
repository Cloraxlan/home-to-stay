import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addResource } from "../reducers/resourcesSlice";
import { csvLoader } from "./loader";

function LoaderComponent() {
	//Testing
	const dispatch = useDispatch();
	let test = async () => {
		let r = await csvLoader();
		console.log(r);

		r.housing.map((h) => {
			dispatch(addResource(h));
		});
	};
	useEffect(() => {
		test();
	}, []);

	return <React.Fragment></React.Fragment>;
}

export default LoaderComponent;
