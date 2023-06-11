import { combineReducers, createStore } from "redux";
import TodoReducer from "./Reducers/todoReducer";
import visibilityReducer from "./Reducers/VisibilityReducer";

export let initialState = {
  visibilityFilter: "SHOW_ALL",
  todoList: [
    {
      id: 1,
      text: "Drink coffee",
      isCompleted: false,
    },

    {
      id: 2,
      text: "Play Genshin Impact",
      isCompleted: false,
    },

    {
      id: 3,
      text: "Roll the Kokomi",
      isCompleted: false,
    },

    {
      id: 4,
      text: "Go to sleep",
      isCompleted: false,
    },
  ],
};

let reducers = combineReducers({
  TodoReducer,
  visibilityReducer,
});

let store = createStore(reducers);

export default store;
