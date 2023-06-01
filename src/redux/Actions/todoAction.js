import { ADD_ITEM, REMOVE_ITEM } from "../Constants/Constants";

export const add_item = (todoValue) => {
  return {
    type: ADD_ITEM,
    addTodo: todoValue,
  };
};

export const remove_item = (todoId) => {
  return {
    type: REMOVE_ITEM,
    removeTodo: todoId,
  };
};
