import { RECEIVE_ERRORS,
         CLEAR_ERRORS } from '../actions/errors_actions';
import { merge, extend } from 'lodash';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ERRORS:
      return merge([], state, action.errors);
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;
