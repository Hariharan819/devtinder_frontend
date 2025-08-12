import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addconnection: (state, action) => {
      return action.payload;
    },
    removeconnection: (state) => {
      return null;
    },
  },
});

export const { addconnection, removeconnection } = connectionSlice.actions;
export const connectionReducer = connectionSlice.reducer;
