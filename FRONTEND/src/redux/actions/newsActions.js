import axios from "axios";

import {
  GET_TOP_HEADLINES_SUCCESS,
  GET_TOP_HEADLINES_FAILURE,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_FAILURE,
  GET_NEWS_BY_CATEGORY_SUCCESS,
  GET_NEWS_BY_CATEGORY_FAILURE,
  SET_LOADING,
} from "../constants/constants";

export const getTopHeadlines = (country) => async (dispatch) => {
  try {
    const response = await axios.get(`/top-headlines/?country=${country}`);
    if (response.data.news) {
      dispatch({
        type: GET_TOP_HEADLINES_SUCCESS,
        payload: response.data.news,
      });
    } else {
      dispatch({
        type: GET_TOP_HEADLINES_FAILURE,
        payload: response.data.error_msg,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_TOP_HEADLINES_FAILURE,
      payload: "Error connecting to the Server.",
    });
  }
};

export const search = (q) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const response = await axios.get(`/search/?q=${q}`);
    if (response.data.news) {
      dispatch({
        type: GET_SEARCH_RESULTS_SUCCESS,
        payload: response.data.news,
      });
    } else {
      dispatch({
        type: GET_SEARCH_RESULTS_FAILURE,
        payload: response.data.error_msg,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_SEARCH_RESULTS_FAILURE,
      payload: "Error connecting to the Server",
    });
  }
};

export const getNewsByCategory = (country, category) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const response = await axios.get(
      `/category/?country=${country}&category=${category}`
    );
    if (response.data.news) {
      dispatch({
        type: GET_NEWS_BY_CATEGORY_SUCCESS,
        payload: response.data.news,
      });
    } else {
      dispatch({
        type: GET_NEWS_BY_CATEGORY_FAILURE,
        payload: response.data.error_msg,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_SEARCH_RESULTS_FAILURE,
      payload: "Error connecting to the Server",
    });
  }
};
