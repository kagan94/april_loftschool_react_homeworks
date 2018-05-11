import { show }from '../api';
import { getSingleSeriesFailure, getSingleSeriesRequest, getSingleSeriesSuccess } from '../actions/show'

const showMiddleware = store => next => action => {
  if (action.type === getSingleSeriesRequest.toString()) {
    const showId = action.payload;

    show(showId)
      .then(seriesInfo => {
        if (seriesInfo.status === 404) {
          const error = seriesInfo.name;
          return store.dispatch(getSingleSeriesFailure(error));
        }
        store.dispatch(getSingleSeriesSuccess(seriesInfo));
      })
      .catch(error => store.dispatch(getSingleSeriesFailure(error)));
  }

  return next(action);
};

export default showMiddleware;

// fetch('http://api.tvmaze.com/shows/180/episodes', {
//   method: 'GET',
//   mode: 'cors'
// })
