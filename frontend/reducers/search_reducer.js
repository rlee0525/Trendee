import { RECEIVE_FOUND_POSTS } from '../actions/posts_actions';
import merge from 'lodash/merge';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_FOUND_POSTS:
      return action.posts;
    default:
      return state;
  }
};

export default SearchReducer;
