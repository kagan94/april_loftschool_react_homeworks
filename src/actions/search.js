import { createActions } from 'redux-actions';

const {
    searchRequest: getSearchRequest,
    searchSuccess: getSearchSuccess,
    searchFailure: getSearchFailure
} = createActions({
  SEARCH_REQUEST: null,
  SEARCH_SUCCESS: null,
  SEARCH_FAILURE: null
});

export {
  getSearchRequest,
  getSearchSuccess,
  getSearchFailure
};

// actionType = getSearchRequest.toString()
