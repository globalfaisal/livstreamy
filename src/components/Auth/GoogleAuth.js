import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = {
    isSignedIn: false,
  };
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
          // listen for google auth signIn changes
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    const { isSignedIn } = this.state;
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

export default GoogleAuth;
