import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import MainNavBar from '../main_navbar/main_navbar_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <MainNavBar />
      </div>
    );
  }
}

export default Home;
