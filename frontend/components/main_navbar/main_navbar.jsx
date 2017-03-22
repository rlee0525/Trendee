import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class MainNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    (this.props.logout()).then(() => hashHistory.replace("/"));
  }

  render() {
    return (
      <div className="main-navbar-container">
        <div className="nav-left">
          <Link to="/home">
            <img id="logo" src="http://res.cloudinary.com/rlee0525/image/upload/v1490145963/Logomakr_2u6XfB_nj7a1l.png"/>
          </Link>
        </div>

        <div className="nav-discover">
          <ul>
            <li className={this.props.location.pathname==="/home" ? "active" : ""}>Discover</li>
          </ul>
        </div>

        <div className="nav-set">
          <ul>
            <li className={this.props.location.pathname==="/post" ? "active" : ""}>Set</li>
          </ul>
        </div>

        <div className="nav-right">
          <ul>
            <li onClick={this.signOut}>Sign out</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(MainNavBar);
