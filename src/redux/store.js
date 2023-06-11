import { combineReducers, createStore } from "redux";
import TodoReducer from "./Reducers/todoReducer";
import visibilityReducer from "./Reducers/VisibilityReducer"

let reducers = combineReducers({
  TodoReducer,
  visibilityReducer,
});

let store = createStore(reducers);

export default store;
