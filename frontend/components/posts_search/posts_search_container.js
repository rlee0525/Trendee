import PostsSearch from './posts_search';
import { connect } from 'react-redux';
import { searchPosts } from '../../actions/posts_actions';
import _ from 'lodash';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  searchPosts: _.debounce(search => dispatch(searchPosts(search)), 150)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsSearch);
