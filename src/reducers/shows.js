import { getSingleSeriesFailure, getSingleSeriesRequest, getSingleSeriesSuccess } from '../actions/show'

const initState = {
  showInfo: null,
  isLoading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case getSingleSeriesRequest.toString():
      return {...state, isLoading: true};

    case getSingleSeriesSuccess.toString():
      return {...state, showInfo: action.payload, isLoading: false};

    case getSingleSeriesFailure.toString():
      return {...state, error: action.payload, isLoading: false};

    default:
      return state;
  }
};
