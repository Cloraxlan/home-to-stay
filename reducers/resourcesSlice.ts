import { Draft, PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";
import { EducationResouce } from "../model/Resources/EducationResouce";
import { FoodResouce } from "../model/Resources/FoodResouce";
import { HousingResouce } from "../model/Resources/HousingResource";
import { JobResource } from "../model/Resources/JobResouce";
import {
	Resource,
	ResourceType,
	SerializedResource,
} from "../model/Resources/Resource";
import { Address } from "../model/Clickables/Address";
import { Phone } from "../model/Clickables/Phone";
import { URL } from "../model/Clickables/URL";
import { RootState } from "../store";
import { csvLoader } from "../database/loader";
import { HealthcareResource } from "../model/Resources/HealthcareResource";
import { ServiceResource } from "../model/Resources/ServiceResource";

export interface ResouceState {
	education: SerializedResource[];
	food: SerializedResource[];
	housing: SerializedResource[];
	jobs: SerializedResource[];
	healthcare: SerializedResource[];
	services: SerializedResource[];
}

const initialState: ResouceState = {
	education: [],
	food: [],
	housing: [],
	jobs: [],
	healthcare: [],
	services: [],
};

export const resourceSlice: Slice = createSlice({
	name: "resources",
	initialState,
	reducers: {
		addResource: (
			state: Draft<ResouceState>,
			action: PayloadAction<SerializedResource>,
		) => {
			switch (action.payload.type) {
				case ResourceType.EDUCATION:
					state.education.push(action.payload);
					break;
				case ResourceType.FOOD:
					state.food.push(action.payload);
					break;
				case ResourceType.HOUSING:
					state.housing.push(action.payload);
					break;
				case ResourceType.JOB:
					state.jobs.push(action.payload);
					break;
				case ResourceType.SERVICE:
					state.services.push(action.payload);
					break;
				case ResourceType.HEALTHCARE:
					state.healthcare.push(action.payload);
					break;
			}
		},
	},
});
const unserialize = (serializedRes: SerializedResource[]): Resource[] => {
	let resources: Resource[] = [];
	serializedRes.map((serialized) => {
		resources.push(Resource.of(serialized));
	});
	return resources;
};

export const { addResource } = resourceSlice.actions;
export const selectEducation = (state: RootState) =>
	unserialize((state.resources as ResouceState).education);
export const selectHealthcare = (state: RootState) =>
	unserialize((state.resources as ResouceState).healthcare);
export const selectHousing = (state: RootState) =>
	unserialize((state.resources as ResouceState).housing);
export const selectJobs = (state: RootState) =>
	unserialize((state.resources as ResouceState).jobs);
export const selectServices = (state: RootState) =>
	unserialize((state.resources as ResouceState).services);
export const selectFood = (state: RootState) =>
	unserialize((state.resources as ResouceState).food);

export default resourceSlice.reducer;
