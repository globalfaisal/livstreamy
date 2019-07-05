/* --- framework --- */
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo-color-dark.svg';
/* --- styles --- */
import './Header.scss';

const Header = props => {
  return (
    <header className="main-header">
      <div className="content">
        <div className="brand">
          <div className="brand-logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="brand-name">LivStream</div>
        </div>
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
