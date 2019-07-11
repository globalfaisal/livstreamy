/* --- framework --- */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

/* --- components --- */
import GoogleAuth from '../GoogleAuth/GoogleAuth';
import Profile from './../Profile/Profile';
/* --- image --- */
import logo from '../../assets/images/logo-color-dark.svg';

/* --- styles --- */
import './Header.scss';

const Header = props => {
  const renderLogin = () => {
    return (
      <GoogleAuth>
        {({ isSignedIn, onSignIn, onSignOut }) => (
          <Fragment>
            {!isSignedIn ? (
              <Link to="#" onClick={onSignIn} className="nav-link">
                Log In
              </Link>
            ) : (
              <Link to="#" onClick={onSignOut} className="nav-link">
                Log Out
              </Link>
            )}
          </Fragment>
        )}
      </GoogleAuth>
    );
  };
  return (
    <header className="main-header">
      <nav className="navbar">
        <div className="brand">
          <Link to="/" className="brand-link">
            <div className="brand-logo">
              <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="brand-name">LivStream</div>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/streams" className="nav-link ">
            Browse
          </Link>
          <Link to="/streams/new" className="nav-link left">
            Go Live
          </Link>
          {renderLogin()}
        </div>
        <Profile />
      </nav>
    </header>
  );
};

export default Header;
