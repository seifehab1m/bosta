import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useTracking } from "../hooks/useTracking";

export interface TrackingState {
  data: any;
  loading: boolean;
  error: string | null;
}

 const initialState: TrackingState = {
  data: null,
  loading: false,
  error: null,
};
export const getTrackingData = createAsyncThunk(
  "tracking/getTrackingData",
  async (trackingNumber: number | string) => {
    const response = await useTracking(trackingNumber);
    return response;
  }
);
const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrackingData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTrackingData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getTrackingData.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch tracking data";
      });
  },
});

export default trackingSlice.reducer;
