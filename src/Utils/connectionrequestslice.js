import { createSlice } from "@reduxjs/toolkit";

const connectionrequestSlice = createSlice({
  name: "connectionrequests",
  initialState: null,
  reducers: {
    addconnectionrequest: (state, action) => {
      return action.payload;
    },
    removeconnectionrequest: (state) => {
      return null;
    },
  },
});

export const { addconnectionrequest, removeconnectionrequest } =
  connectionrequestSlice.actions;
export const connectionrequestReducer = connectionrequestSlice.reducer;
