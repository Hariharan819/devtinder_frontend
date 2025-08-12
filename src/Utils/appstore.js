import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userslice";
import { feedReducer } from "./feedslice";
import { connectionReducer } from "./connectionslice";
import { connectionrequestReducer } from "./connectionrequestslice";

export const appstore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionReducer,
    connectionrequests: connectionrequestReducer,
  },
});
export default appstore;
