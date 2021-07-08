import { createSlice } from "@reduxjs/toolkit";

const mainReducer = createSlice({
  name: "main",
  initialState: {
    user: {},
    loader: true,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },

    setLoaderStatus(state, action) {
      state.loader = action.payload;
    },
  },
});

export const { setUser, setLoaderStatus } = mainReducer.actions;

export default mainReducer.reducer;
