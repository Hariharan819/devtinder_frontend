import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    adduser: (state, action) => {
      return action.payload;
    },
    removeuser: (state) => {
      return null;
    },
  },
});

export const { adduser, removeuser } = counterSlice.actions;
export const userReducer = userSlice.reducer;
