import {
  ACTION_CLEAR_ERROR,
  ACTION_GET_RESTAURANTS,
  ACTION_GET_RESTAURANTS_ERROR,
  ACTION_GET_RESTAURANTS_SUCCESS,
} from '../Constants';

const createReducerFromObject = (reducerFunctionsArg, initialState) => {
  const reducerFunctions = reducerFunctionsArg;
  if (!reducerFunctions.default) {
    reducerFunctions.default = state => state;
  }

  return (state, { type, payload, input }) => (reducerFunctions[type]
    || reducerFunctions.default)(state || initialState, payload, input);
};

const initialState = {
  restaurants: [],
  searchKey: '',
  searchSuggestions: [],
};

const reducerObj = {
  [ACTION_GET_RESTAURANTS]: (state) => ({
    ...state,
    loading: true,
  }),
  [ACTION_CLEAR_ERROR]: (state) => ({
    ...state,
    errorMessage: '',
  }),
  [ACTION_GET_RESTAURANTS_SUCCESS]: (state, payload) => ({
    ...state,
    loading: false,
    errorMessage: '',
    restaurants: payload,
  }),
  [ACTION_GET_RESTAURANTS_ERROR]: (state, payload) => ({
    ...state,
    loading: false,
    errorMessage: payload,
  }),
};

export default createReducerFromObject(reducerObj, initialState);