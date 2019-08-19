/* Framework */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  return props.isSignedIn ? <Route {...props} /> : <Redirect to="/streams" />;
};
const mapStateToProps = state => ({ isSignedIn: state.auth.isSignedIn });
export default connect(mapStateToProps)(ProtectedRoute);
