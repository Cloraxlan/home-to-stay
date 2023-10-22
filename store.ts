import { configureStore } from "@reduxjs/toolkit";
import resourceSlice from "./reducers/resourcesSlice";

export const store = configureStore({
	reducer: {
		resources: resourceSlice,
	},
});
export type RootState = ReturnType<typeof store.getState>;
