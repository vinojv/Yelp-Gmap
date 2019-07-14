export const ACTION_GET_RESTAURANTS = 'g/ACTION_GET_RESTAURANTS';
export const ACTION_GET_RESTAURANTS_SUCCESS = 'g/ACTION_GET_RESTAURANTS_SUCCESS';
export const ACTION_GET_RESTAURANTS_ERROR = 'g/ACTION_GET_RESTAURANTS_ERROR';
export const ACTION_CLEAR_ERROR = 'g/ACTION_CLEAR_ERROR';
export const sugar = 'wfjGJjybjdhG0J0LVynQTGytYSx3wWFq86tLagik1Q4VuQNV_RsSMldrz3tdjk_0oC30nRp1ba3PsvsXg1s5c7fx3Wcz9_ZgUcczJpRBcbXd2qLv2_TUH6s64KKbXHYx';

export const defaultPayload = {
  categories: 'restaurants,All',
  term: 'restaurant',
  radius: 5000,
  limit: 10,
};

export const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${sugar}`,
};

export const googleMapKeys = {
  key: 'AIzaSyDAQOhuvUriLPgDzVblnSSH7BUj-s2EMSw',
  libraries: ['places', 'geometry'],
};