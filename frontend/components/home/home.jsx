import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import MainNavBar from '../main_navbar/main_navbar_container';
import MainSearch from '../main_search/main_search_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <MainNavBar />
        <div className="home-main-container">
          <MainSearch />
        </div>
      </div>
    );
  }
}

export default Home;
