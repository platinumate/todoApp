import { CHANGE_THEME } from "../Constants/constants";

export const change_theme = (theme) => {
  return {
    type: CHANGE_THEME,
    theme,
  };
};
