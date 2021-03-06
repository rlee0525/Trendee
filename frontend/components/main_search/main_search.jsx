import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import enhanceWithClickOutside from 'react-click-outside';
import Categories from './categories';

class MainSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "All",
      subcategory: "All",
      post: "All",
      user: "All",
      isOpened: false,
    }

    this.handleCategories = this.handleCategories.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickCategory(subcategory) {
    this.setState({
      subcategory
    });
  }

  handleClickOutside() {
    this.setState({ isOpened: false });
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleCategories() {
    let isOpened = !this.state.isOpened;

    this.setState({
      isOpened
    });
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
              <p className="search-bar" onClick={this.handleCategories}>
                {this.state.subcategory}
              </p>
            </div>
            {this.state.isOpened &&
              <Categories handleClickCategory={this.handleClickCategory}
                          handleClickOutside={this.handleClickOutside} />}
          </div>

          <div className="search-container">
            <div className="search-title">
              <p>Post</p>
              <div className="search-input">
                <input type="text"
                  placeholder="All"
                  className="search-bar"
                  onChange={this.update('post')} />
              </div>
            </div>
          </div>

          <div className="search-container">
            <div className="search-title">
              <p>User</p>
            </div>
            <div className="search-input">
              <input type="text"
                placeholder="All"
                className="search-bar"
                onChange={this.update('user')} />
            </div>

            <div className="search-button">
              <button>Search</button>
            </div>
          </div>
        </div>

        <div className="responsive-search-container">
          <div className="search-container">
            <div className="search-title">
              <p>Category</p>
            </div>
            <div className="search-input">
              <p className="search-bar" onClick={this.handleCategories}>
                {this.state.subcategory}
              </p>
            </div>
            {this.state.isOpened &&
              <Categories handleClickCategory={this.handleClickCategory}
                          handleClickOutside={this.handleClickOutside} />}
          </div>
          <div className="search-button">
            <button>Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default enhanceWithClickOutside(MainSearch);
