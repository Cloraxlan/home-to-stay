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
	currentResource?: Resource;
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
		addResourceBulk: (
			state: Draft<ResouceState>,
			action: PayloadAction<SerializedResource[]>,
		) => {
			state.resources = state.resources.concat(action.payload);
		},
		clearResources: (state: Draft<ResouceState>) => {
			state.resources = [];
		},
		changeLoadStateForResource: (
			state: Draft<ResouceState>,
			action: PayloadAction<boolean>,
		) => {
			state.loading = action.payload;
		},
		setCurrentResource: (
			state: Draft<ResouceState>,
			action: PayloadAction<Resource>,
		) => {
			state.currentResource = action.payload;
		},
	},
});

export const { addResource } = resourceSlice.actions;
export const { changeLoadStateForResource } = resourceSlice.actions;
export const { setCurrentResource } = resourceSlice.actions;
export const { clearResources } = resourceSlice.actions;
export const { addResourceBulk } = resourceSlice.actions;

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
const unserializeAnyResources = (
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

const selectResourcesSerial = (state: RootState) => state.resources.resources;
const selectCurrentResourceSerial = (state: RootState) =>
	state.resources.currentResource;

export const selectResources = (type: ResourceType) => {
	return createSelector(selectResourcesSerial, (resources) => {
		return unserializeResources(resources, type);
	});
};

export const selectAllResources = createSelector(
	selectResourcesSerial,
	(resources) => {
		return unserializeAnyResources(resources);
	},
);
export const selectCurrentResource = createSelector(
	selectCurrentResourceSerial,
	(resource) => {
		return Resource.of(resource);
	},
);

export default resourceSlice.reducer;
