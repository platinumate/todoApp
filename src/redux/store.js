import { combineReducers, createStore } from "redux";
import TodoReducer from "./Reducers/todoReducers";

let reducers = combineReducers({
  Todo: TodoReducer,
});

let store = createStore(reducers);

export default store;
