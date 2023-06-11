import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  TOOGLE_ITEM,
} from "../Constants/Constants";

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

let TodoReducer = (state = initialState, action) => {
  let todoListCopy = state.todoList;
  switch (action.type) {
    case ADD_ITEM:
      todoListCopy = state.todoList.concat(action.todoValue);
      return {
        ...state,
        todoList: todoListCopy,
      };
    case REMOVE_ITEM:
      todoListCopy = state.todoList.filter(
        (todo) => todo.id !== action.removeTodoId
      );
      return {
        ...state,
        todoList: todoListCopy.map((todo) =>
          todo.id > action.removeTodoId ? { ...todo, id: todo.id - 1 } : todo
        ),
      };
    case EDIT_ITEM:
      todoListCopy[action.newTodoValue.id - 1] = action.newTodoValue;
      return {
        ...state,
        todoList: todoListCopy,
      };
    case TOOGLE_ITEM:
      todoListCopy = state.todoList.map((todo) =>
        todo.id == action.toggleTodoId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      return {
        ...state,
        todoList: todoListCopy,
      };
    default:
      return state;
  }
};

export default TodoReducer