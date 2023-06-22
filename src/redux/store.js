import { combineReducers, createStore } from "redux";
import todoReducer from "./Reducers/todoReducer";
import visibilityReducer from "./Reducers/visibilityReducer";
import themeReducer from "./Reducers/themeReducer";

export let initialState = {
  currentTheme: "DARK_THEME",
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
  todoReducer,
  visibilityReducer,
  themeReducer,
});

let store = createStore(reducers);

export default store;
