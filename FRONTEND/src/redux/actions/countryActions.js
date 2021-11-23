import {
  CHANGE_COUNTRY_SUCCESS,
  CHANGE_COUNTRY_FAILURE,
} from "../constants/constants";

export const changeCountry = (country) => async (dispatch) => {
  dispatch({ type: CHANGE_COUNTRY_SUCCESS, payload: country });
};
