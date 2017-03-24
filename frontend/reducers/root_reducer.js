import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PostsReducer from './posts_reducer';
import SearchReducer from './search_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  search: SearchReducer,
  errors: ErrorsReducer
});

export default RootReducer;
