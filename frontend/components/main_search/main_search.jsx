import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class MainSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      post: "",
      user: "",
    }
  }

  render() {
    let currentUser = this.props.currentUser;

    return (
      <div className="search-bar-container">
        <div className="search-bar-section">
          <div className="search-container">
            <div className="search-title">
              <p>Category</p>
            </div>
            <div className="search-input">
              <input type="text"
                placeholder="All"
                className="search-bar" />
            </div>
          </div>

          <div className="search-container">
            <div className="search-title">
              <p>Post</p>
              <div className="search-input">
                <input type="text"
                  placeholder="All"
                  className="search-bar" />
              </div>
            </div>
          </div>

          <div className="search-container">
            <div className="search-title">
              <p>User</p>
            </div>
            <div className="search-input">
              <input type="text"
                placeholder="Anything"
                className="search-bar" />
            </div>

            <div className="search-button">
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MainSearch);
