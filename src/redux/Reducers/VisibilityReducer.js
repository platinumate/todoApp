import { CHANGE_FILTER } from "../Constants/Constants";
import { initialState } from "./todoReducer";

const visibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      let stateCopy = state;
      stateCopy.visibilityFilter = action.filter;
      console.log(stateCopy.visibilityFilter)
      return {
        ...state,
        visibilityFilter: stateCopy.visibilityFilter,
      };
    default:
      return state;
  }
};
export default visibilityReducer;
