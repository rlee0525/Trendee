import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import HomeContainer from './home/home_container';
import PostsSearchContainer from './posts_search/posts_search_container';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _ensureLoggedOut = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home')
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } onEnter={_ensureLoggedOut} />
        <Route path="/home" component={ HomeContainer } onEnter={_ensureLoggedIn} />
        <Route path="/search" component={ PostsSearchContainer } onEnter={_ensureLoggedIn} />
      </Router>
    </Provider>
  );
};

export default Root;
