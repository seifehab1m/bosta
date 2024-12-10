import { configureStore } from "@reduxjs/toolkit";
import trackingSlice from "../slices/trackingSlice";
import languageReducer from "../slices/languageSlice";

export const store = configureStore({
  reducer: {
    tracking: trackingSlice,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
