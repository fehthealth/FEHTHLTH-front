import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: any, { payload }: any) => {
      return {
        ...state,
        ...payload,
      };
    },

    removeUser: (state: any) => {
      return { ...state };
    },
  },
});

export const { removeUser, setUser } = userSlice.actions;
export default userSlice.reducer;
