import {
	Draft,
	PayloadAction,
	Slice,
	createSelector,
	createSlice,
} from "@reduxjs/toolkit";

import {
	Resource,
	ResourceType,
	SerializedResource,
} from "../model/Resources/Resource";

import { RootState } from "../store";

export interface ResouceState {
	education: SerializedResource[];
	food: SerializedResource[];
	housing: SerializedResource[];
	jobs: SerializedResource[];
	healthcare: SerializedResource[];
	services: SerializedResource[];
	loading: boolean;
}

const initialState: ResouceState = {
	education: [],
	food: [],
	housing: [],
	jobs: [],
	healthcare: [],
	services: [],
	loading: false,
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
		changeLoadStateForResource: (
			state: Draft<ResouceState>,
			action: PayloadAction<boolean>,
		) => {
			state.loading = action.payload;
		},
	},
});

export const { addResource } = resourceSlice.actions;
export const { changeLoadStateForResource } = resourceSlice.actions;

const unserializeResources = (
	serializedRes: SerializedResource[],
): Resource[] => {
	let resources: Resource[] = [];
	serializedRes.map((serialized) => {
		resources.push(Resource.of(serialized));
	});
	return resources;
};
export const selectResourceLoading = (state: RootState) =>
	state.resources.loading;

const selectEducationSerial = (state: RootState) =>
	(state.resources as ResouceState).education;
const selectHealthcareSerial = (state: RootState) =>
	(state.resources as ResouceState).healthcare;
const selectHousingSerial = (state: RootState) =>
	(state.resources as ResouceState).housing;
const selectJobsSerial = (state: RootState) =>
	(state.resources as ResouceState).jobs;
const selectServicesSerial = (state: RootState) =>
	(state.resources as ResouceState).services;
const selectFoodSerial = (state: RootState) =>
	(state.resources as ResouceState).food;

export const selectEducation = createSelector(
	selectEducationSerial,
	(resources) => {
		return unserializeResources(resources);
	},
);
export const selectHealthcare = createSelector(
	selectHealthcareSerial,
	(resources) => {
		return unserializeResources(resources);
	},
);
export const selectHousing = createSelector(
	selectHousingSerial,
	(resources) => {
		return unserializeResources(resources);
	},
);
export const selectJobs = createSelector(selectJobsSerial, (resources) => {
	return unserializeResources(resources);
});
export const selectServices = createSelector(
	selectServicesSerial,
	(resources) => {
		return unserializeResources(resources);
	},
);
export const selectFood = createSelector(selectFoodSerial, (resources) => {
	return unserializeResources(resources);
});

export default resourceSlice.reducer;
