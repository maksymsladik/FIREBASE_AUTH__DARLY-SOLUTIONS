import { createSlice } from "@reduxjs/toolkit";

const loginReducer = createSlice({
  name: "login",
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

export const { setEmailAndPassword } = loginReducer.actions;

export default loginReducer.reducer;
