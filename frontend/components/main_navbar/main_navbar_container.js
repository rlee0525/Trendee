import MainNavBar from './main_navbar';
import { connect } from 'react-redux';
import { receiveErrors, clearErrors } from '../../actions/errors_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  errors
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  receiveErrors: () => dispatch(receiveErrors()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNavBar);
