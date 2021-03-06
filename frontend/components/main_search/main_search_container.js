import MainSearch from './main_search';
import { connect } from 'react-redux';
import { searchPosts } from '../../actions/posts_actions';
import _ from 'lodash';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSearch);
