import { combineReducers, legacy_createStore as createStore } from "redux";
import { valueReducer } from "./reducer/valueReducer";
import { themeReducer } from "./reducer/themeReducer";

const rootReducer = combineReducers({
  value: valueReducer,
  theme: themeReducer,
});

export const store = createStore(rootReducer);
