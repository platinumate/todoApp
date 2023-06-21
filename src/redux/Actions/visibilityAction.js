import { CHANGE_FILTER } from "../Constants/constants";

export const change_filter = (filter) => {
  return {
    type: CHANGE_FILTER,
    filter,
  };
};
