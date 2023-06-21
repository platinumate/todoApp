import { CHANGE_THEME } from "../Constants/constants";
import { initialState } from "../store";

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      let stateCopy = state;
      stateCopy.currentTheme = action.theme;
      return {
        ...state,
        currentTheme: stateCopy.currentTheme
      }
    default:
      return state;
  }
};

export default themeReducer;
