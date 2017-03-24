import { RECEIVE_POSTS,
         RECEIVE_POST,
         REMOVE_POST,
         POST_ERROR,
         CLEAR_ERROR } from '../actions/posts_actions';
import { merge, extend } from 'lodash';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return merge({}, state, {
        [action.post.id]: action.post
      });
    case REMOVE_POST:
      const nextState = merge({}, state);
      delete nextState[action.post.id];
      return nextState;
    default:
      return state;
  }
};

export default PostsReducer;
