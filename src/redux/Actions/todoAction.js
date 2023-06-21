import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  TOOGLE_ITEM,
} from "../Constants/constants";

export const add_item = (todoValue) => {
  return {
    type: ADD_ITEM,
    todoValue,
  };
};

export const remove_item = (removeTodoId) => {
  return {
    type: REMOVE_ITEM,
    removeTodoId,
  };
};

export const edit_item = (newTodoValue) => {
  return {
    type: EDIT_ITEM,
    newTodoValue,
  };
};

export const toggle_item = (toggleTodoId) => {
  return {
    type: TOOGLE_ITEM,
    toggleTodoId,
  };
};
