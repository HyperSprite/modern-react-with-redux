import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostReducer,
  form: formReducer,
});

export default rootReducer;
