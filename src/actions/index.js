import {
  ACTION_CLEAR_ERROR,
  ACTION_GET_RESTAURANTS,
  ACTION_GET_RESTAURANTS_ERROR,
  ACTION_GET_RESTAURANTS_SUCCESS,
} from '../Constants';

export const getRestaurants = (payload) => ({ type: ACTION_GET_RESTAURANTS, payload });
export const clearMessages = (payload) => ({ type: ACTION_CLEAR_ERROR, payload });
export const getRestaurantsSuccess = (payload) => ({ type: ACTION_GET_RESTAURANTS_SUCCESS, payload });
export const getRestaurantsError = (payload) => ({ type: ACTION_GET_RESTAURANTS_ERROR, payload });