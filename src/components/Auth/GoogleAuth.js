import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../../actions/authActions';

class GoogleAuth extends Component {
  componentDidMount() {
    // load client and auth2 from google api
    window.gapi.load('client:auth2', () => {
      // initalize gapi client
      window.gapi.client
        .init({
          clientId:
            '477592189113-idgb2shernv8badej034vih84tj66vr2.apps.googleusercontent.com',
          scope: 'email profile',
        })
        .then(() => {
          // get the auth2 from gapi
          this.auth = window.gapi.auth2.getAuthInstance();

          // initial dispatch of the app auth state
          this.onAuthChange(this.auth.isSignedIn.get());

          // listen for future auth status changes
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    // dispatch the appropriate auth actions
    if (isSignedIn) this.props.signIn();
    else this.props.signOut();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    const { isSignedIn } = this.props;
    if (!this.props.children) return null;
    // render the children prop passed as function
    return (
      <React.Fragment>
        {this.props.children({
          isSignedIn: isSignedIn,
          onSignIn: this.onSignInClick,
          onSignOut: this.onSignOutClick,
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ isSignedIn: state.auth.isSignedIn });

const mapDispatchToProps = {
  signIn,
  signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleAuth);
