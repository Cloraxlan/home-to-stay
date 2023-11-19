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
	resources: SerializedResource[];
	loading: boolean;
}

const initialState: ResouceState = {
	resources: [],
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
			state.resources.push(action.payload);
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
	type: ResourceType,
): Resource[] => {
	let resources: Resource[] = [];
	serializedRes.map((serialized) => {
		if (serialized.type == type) {
			resources.push(Resource.of(serialized));
		}
	});
	return resources;
};
export const selectResourceLoading = (state: RootState) =>
	state.resources.loading;

const selectResourcesSerial = (state: RootState) => state.resources.resources;

export const selectResources = (type: ResourceType) => {
	return createSelector(selectResourcesSerial, (resources) => {
		return unserializeResources(resources, type);
	});
};

export default resourceSlice.reducer;
