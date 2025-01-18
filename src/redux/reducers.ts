import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./features/userSlice";

const combinedReducer = combineReducers({
  user: userSlice,
});

export default combinedReducer;
