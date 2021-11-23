import {
  CHANGE_COUNTRY_SUCCESS,
  CHANGE_COUNTRY_FAILURE,
} from "../constants/constants";

const initialState = {
  loading: true,
  country_name: "India",
  country: "in",
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COUNTRY_SUCCESS: {
      return {
        loading: false,
        country_name: action.payload.country_name,
        country: action.payload.country,
      };
    }
    case CHANGE_COUNTRY_FAILURE: {
      return {
        loading: false,
        country_name: "India",
        country: "in",
      };
    }
    default: {
      return state;
    }
  }
};
