import React, { Fragment } from 'react';
import GoogleAuth from '../Auth/GoogleAuth';
import { Button, Popup, Icon } from 'semantic-ui-react';

const Login = () => {
  return (
    <div className="user-login">
      <GoogleAuth>
        {({ isSignedIn, onSignIn, onSignOut }) => (
          <Fragment>
            {!isSignedIn ? (
              <Popup
                trigger={
                  <Button
                    onClick={onSignIn}
                    content="Sign in"
                    color="black"
                    size="mini"
                  />
                }
                content={
                  <Fragment>
                    <Icon name="google" /> Sign in with google
                  </Fragment>
                }
                on="hover"
                position="left center"
                size="mini"
              />
            ) : (
              <Button
                onClick={onSignOut}
                content="Sign out"
                color="black"
                size="mini"
              />
            )}
          </Fragment>
        )}
      </GoogleAuth>
    </div>
  );
};

export default Login;
