import {
  GET_TOP_HEADLINES_SUCCESS,
  GET_TOP_HEADLINES_FAILURE,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_FAILURE,
  GET_NEWS_BY_CATEGORY_SUCCESS,
  GET_NEWS_BY_CATEGORY_FAILURE,
  SET_LOADING,
} from "../constants/constants";

const initialState = {
  loading: true,
  news: [],
  error_msg: "",
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_TOP_HEADLINES_SUCCESS:
    case GET_NEWS_BY_CATEGORY_SUCCESS:
    case GET_SEARCH_RESULTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        news: action.payload,
      };
    }
    case GET_TOP_HEADLINES_FAILURE:
    case GET_NEWS_BY_CATEGORY_FAILURE:
    case GET_SEARCH_RESULTS_FAILURE: {
      return {
        loading: false,
        news: [],
        error_msg: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
