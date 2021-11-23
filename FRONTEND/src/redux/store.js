import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { countryReducer } from "./reducers/countryReducer";
import { newsReducer } from "./reducers/newsReducer";
import { themeReducer } from "./reducers/themeReducer";

const reducer = combineReducers({
  country: countryReducer,
  news: newsReducer,
  theme: themeReducer,
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
