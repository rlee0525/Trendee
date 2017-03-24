import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import Loading from '../loading/loading';
import MainNavBar from '../main_navbar/main_navbar_container';
import MainSearch from '../main_search/main_search_container';

class PostsSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      post: "All",
    }
  }

  componentDidMount() {
    this.props.searchPosts().then(() => {
      this.setState({
        loading: false
      });
    });
  }

  render() {
    let currentUser = this.props.currentUser;

    return (
      <div className="posts-search-container">
        <MainNavBar />

        <div className="posts-search-main">
          <div className="sidebar-search-container">
            "this is where the sidebar search component will go"
          </div>

          <div className="posts-search-result">
            {
              this.state.loading ? <Loading /> : <PostsList searchedPosts={this.props.search} />
            }
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(PostsSearch);
