/* --- framework --- */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* --- custom components --- */
import Login from './../Login/Login';

/* --- image --- */
import logo from '../../assets/images/logo-color-dark.svg';

/* --- styles --- */
import './Header.scss';

const Header = props => {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="brand">
          <Link to="/" className="brand-link">
            <div className="brand-logo">
              <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="brand-name">LivStream</div>
          </Link>
        </div>
        <nav className="header-navbar">
          <Login />
        </nav>
        {props.children}
      </div>
    </header>
  );
};
Header.propTypes = {
  logo: PropTypes.string,
  brandName: PropTypes.string,
};

export default Header;
