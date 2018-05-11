import { search }from '../api';
import { getSearchRequest, getSearchSuccess, getSearchFailure } from '../actions/search'


const searchMiddleware = store => next => action => {

  if (action.type === getSearchRequest.toString()) {
    const showTitle = action.payload;

    search(showTitle)
      .then(shows => store.dispatch(getSearchSuccess(shows)))
      .catch(error => store.dispatch(getSearchFailure(error)));
  }

  return next(action);
};

export default searchMiddleware;
