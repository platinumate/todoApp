import { ADD_ITEM, REMOVE_ITEM } from "../Constants/Constants";

let initialState = {
  todoList: [
    {
      id: 1,
      text: "Drink coffee",
      isActive: false,
    },

    {
      id: 2,
      text: "Play Genshin Impact",
      isActive: true,
    },

    {
      id: 3,
      text: "Roll the Kokomi",
      isActive: false,
    },

    {
      id: 4,
      text: "Go to sleep",
      isActive: false,
    },
  ],
};

let TodoReducer = (state = initialState, action) => {
  let todoListCopy = state.todoList;
  switch (action.type) {
    case ADD_ITEM:
      todoListCopy = state.todoList.concat(action.addTodo);
      return {
        ...state,
        todoList: todoListCopy,
      };
    case REMOVE_ITEM:
      todoListCopy = state.todoList.filter((el) => el.id !== action.removeTodo);
      return {
        ...state,
        todoList: todoListCopy,
      };
    default:
      return state;
  }
};

export default TodoReducer;
