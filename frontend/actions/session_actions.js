import * as APIUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)))
);
