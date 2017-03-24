import * as PostsAPIUtil from '../util/posts_api_util';

import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_FOUND_POSTS = "RECEIVE_FOUND_POSTS";

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const removePost = post => ({
  type: REMOVE_POST,
  post
});

export const receiveFoundPosts = posts => ({
  type: RECEIVE_FOUND_POSTS,
  posts
});

export const requestPosts = () => dispatch => (
  PostsAPIUtil.fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestPost = id => dispatch => (
  PostsAPIUtil.fetchPost(id)
    .then(post => dispatch(receivePost(post)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const createPost = data => dispatch => (
  PostsAPIUtil.createPost(data)
    .then(post => dispatch(receivePost(post)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const updatePost = data => dispatch => (
  PostsAPIUtil.updatePost(data)
    .then(post => dispatch(receivePost(post)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const destroyPost = data => dispatch => (
  PostsAPIUtil.destroyPost(data)
    .then(post => dispatch(removePost(post)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const searchPosts = data => dispatch => (
  PostsAPIUtil.searchPosts(data)
    .then(posts => dispatch(receiveFoundPosts(posts)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);
