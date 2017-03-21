import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser
      };
    default:
      return state;
  }
};

export default SessionReducer;
