import { Draft, PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";
import { EducationResouce } from "../model/Resources/EducationResouce";
import { FoodResouce } from "../model/Resources/FoodResouce";
import { HousingResouce } from "../model/Resources/HousingResource";
import { JobResource } from "../model/Resources/JobResouce";
import { Resource, ResourceType } from "../model/Resources/Resource";
import { Address } from "../model/Clickables/Address";
import { Phone } from "../model/Clickables/Phone";
import { URL } from "../model/Clickables/URL";
import { RootState } from "../store";
import { csvLoader } from "../database/loader";
import { HealthcareResource } from "../model/Resources/HealthcareResource";
import { ServiceResource } from "../model/Resources/ServiceResource";

export interface ResouceState {
	education: EducationResouce[];
	food: FoodResouce[];
	housing: HousingResouce[];
	jobs: JobResource[];
	healthcare: HealthcareResource[];
	services: ServiceResource[];
}

/*
const initialState: ResouceState = {
	education: [],
	food: [],
	housing: [],
	jobs: [],
};
*/
const initialState: ResouceState = csvLoader();
export const resourceSlice: Slice = createSlice({
	name: "resources",
	initialState,
	reducers: {
		addResource: (
			state: Draft<ResouceState>,
			action: PayloadAction<Resource>,
		) => {
			switch (typeof action.payload) {
				case typeof EducationResouce:
					state.education.push(action.payload);
					break;
				case typeof FoodResouce:
					state.food.push(action.payload);
					break;
				case typeof HousingResouce:
					state.housing.push(action.payload);
					break;
				case typeof JobResource:
					state.jobs.push(action.payload);
					break;
				case typeof ServiceResource:
					state.services.push(action.payload);
					break;
			}
		},
	},
});

export const { addResource } = resourceSlice.actions;
export const selectEducation = (state: RootState) =>
	(state.resources as ResouceState).education;
export const selectHealthcare = (state: RootState) =>
	(state.resources as ResouceState).healthcare;
export const selectHousing = (state: RootState) =>
	(state.resources as ResouceState).housing;
export const selectJobs = (state: RootState) =>
	(state.resources as ResouceState).jobs;
export const selectServices = (state: RootState) =>
	(state.resources as ResouceState).services;
export const selectFood = (state: RootState) =>
	(state.resources as ResouceState).food;

export default resourceSlice.reducer;
