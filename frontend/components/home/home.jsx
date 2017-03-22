import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    (this.props.logout()).then(() => hashHistory.replace("/"));
  }

  render() {
    return (
      <div className="home-container">
        Hello!

        <div className="idk">
          <button onClick={this.signOut}>Sign out</button>
        </div>
      </div>
    );
  }
}

export default Home;
