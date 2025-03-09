import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login(state, action) {
      return action.payload;
    },
    createUser(state, action) {
      return action.payload;
    },
    logOut(state) {
      return {};
    },
  },
});

const { reducer, actions } = userSlice;
export const { login, createUser, logOut } = actions;

export default reducer;
