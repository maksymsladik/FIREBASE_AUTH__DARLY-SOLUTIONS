import { createSlice } from "@reduxjs/toolkit";

const logupReducer = createSlice({
  name: "logup",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setEmailAndPassword(state, action) {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { setEmailAndPassword } = logupReducer.actions;

export default logupReducer.reducer;
