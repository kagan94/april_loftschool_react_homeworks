// export const GET_SINGLE_SERIES_REQUEST = 'GET_SINGLE_SERIES_REQUEST';
// export const GET_SINGLE_SERIES_SUCCESS = 'GET_SINGLE_SERIES_SUCCESS';
// export const GET_SINGLE_SERIES_FAILURE = 'GET_SINGLE_SERIES_FAILURE';
//
//
// export const getSingleSeriesRequest = () => ({
//   type: GET_SINGLE_SERIES_REQUEST
// });
//
// export const getSingleSeriesSuccess = (payload) => ({
//   type: GET_SINGLE_SERIES_SUCCESS,
//   payload
// });
//
// export const getSingleSeriesFailure = (payload) => ({
//   type: GET_SINGLE_SERIES_FAILURE,
//   payload
// });


import { createActions } from 'redux-actions';

const {
  getSingleSeries: {
    request: getSingleSeriesRequest,
    success: getSingleSeriesSuccess,
    failure: getSingleSeriesFailure
  }
} = createActions({
  GET_SINGLE_SERIES: {
    REQUEST: null,
    SUCCESS: null,
    FAILURE: null
  }
});

export {
  getSingleSeriesRequest,
  getSingleSeriesSuccess,
  getSingleSeriesFailure
};
