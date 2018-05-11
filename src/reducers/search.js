import { getSearchRequest, getSearchSuccess, getSearchFailure } from '../actions/search'

const initState = {
  shows: [],
  isLoading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case getSearchRequest.toString():
      return {...state, isLoading: true};

    case getSearchSuccess.toString():
      console.log('search reducer success', action.payload);
      return {...state, shows: action.payload, isLoading: false};

    case getSearchFailure.toString():
      return {...state, error: action.payload, isLoading: false};

    default:
      return state;
  }
};

// import { handleActions } from 'redux-actions';
// import { combineReducers } from 'redux';
//
// import { getSearchRequest, getSearchSuccess, getSearchFailure } from '../actions/search';
//
// const shows = handleActions(
//   {
//     [getSearchSuccess]: (_, action) => action.payload
//   },
//   []
// );
//
// const isLoading = handleActions(
//   {
//     [getSearchRequest]: () => true,
//     [getSearchSuccess]: () => false,
//     [getSearchFailure]: () => false
//   },
//   false
// );
//
// const error = handleActions(
//   {
//     [getSearchFailure]: (_, action) => action.error
//   },
//   null
// );
//
// export default combineReducers({shows, isLoading, error});
