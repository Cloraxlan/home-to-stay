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

export interface ResouceState {
	education: EducationResouce[];
	food: FoodResouce[];
	housing: HousingResouce[];
	jobs: JobResource[];
}

export interface ResourceInsert {
	type: ResourceType;
	resouce: Resource;
}
const initialState: ResouceState = {
	education: [
		new EducationResouce(
			"Test Housing",
			"description",
			new Address(
				"1121 N Milwaukee St, Milwaukee",
				"1121 N Milwaukee St, Milwaukee, WI 53202",
			),
			new URL("https://google.com"),
			new Phone("8153458575"),
		),
	],
	food: [],
	housing: [],
	jobs: [],
};

export const resourceSlice: Slice = createSlice({
	name: "resources",
	initialState,
	reducers: {
		addResource: (
			state: Draft<ResouceState>,
			action: PayloadAction<ResourceInsert>,
		) => {
			switch (action.payload.type) {
				case ResourceType.EDUCATION:
					state.education.push(action.payload.resouce);
					break;
				case ResourceType.FOOD:
					state.food.push(action.payload.resouce);
					break;
				case ResourceType.HOUSING:
					state.housing.push(action.payload.resouce);
					break;
				case ResourceType.JOB:
					state.jobs.push(action.payload.resouce);
					break;
			}
		},
	},
});

export const { addResource } = resourceSlice.actions;
export const selectEducation = (state: RootState) =>
	(state.resources as ResouceState).education;
export default resourceSlice.reducer;
