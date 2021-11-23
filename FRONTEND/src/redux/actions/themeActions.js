import { TOGGLE_THEME } from "../constants/constants";

export const toggleTheme = () => async (dispatch) => {
  dispatch({ type: TOGGLE_THEME });
};
