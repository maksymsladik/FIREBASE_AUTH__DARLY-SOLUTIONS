import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../App/redux/reducer";
import logupReducer from "../pages/LogUp/redux/reducer.jsx";
import loginReducer from "../pages/LogIn/redux/reducer";

const rootReducer = combineReducers({
  main: mainReducer,
  logup: logupReducer,
  login: loginReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [],
});

export default store;
