/* --- framework --- */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* --- components --- */
import GoogleAuth from '../GoogleAuth/GoogleAuth';
import Avatar from '../Avatar/Avatar';
/* --- image --- */
import logo from '../../assets/images/logo-color-dark.svg';

/* --- helpers --- */
import history from '../../utils/history/history';

/* --- styles --- */
import './Header.scss';

class Header extends React.Component {
  state = {
    currentUrlPath: '',
  };

  componentDidMount() {
    // first get the current pathname
    this.setState({ currentUrlPath: history.location.pathname });
    // subscribe to path changes
    history.listen(this.onRouteChange);
  }

  onRouteChange = location => {
    this.setState({ currentUrlPath: location.pathname });
  };

  render() {
    const { auth } = this.props;
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
    const { currentUrlPath } = this.state;
    return (
      <header className="main-header">
        <nav className="navbar">
          <div className="brand">
            <Link to="/" className="brand-link">
              <div className="brand-logo">
                <img className="logo" src={logo} alt="logo" />
              </div>
              <div className="brand-name">LivStreamy</div>
            </Link>
          </div>
          <div className="nav-links">
            <div className="left">
              <Link
                to="/streams"
                className={`${
                  currentUrlPath === '/streams' || currentUrlPath === '/'
                    ? 'nav-link selected'
                    : 'nav-link'
                }`}
              >
                Explore
              </Link>
              {auth.isSignedIn && (
                <Link
                  to="/streams/live"
                  className={`${
                    this.state.currentUrlPath === '/streams/live'
                      ? 'nav-link selected'
                      : 'nav-link'
                  }`}
                >
                  Go Live
                </Link>
              )}
            </div>
            <div className="right">{renderLogin()}</div>
          </div>
          <Avatar user={auth.user} />
        </nav>
      </header>
    );
  }
}
const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps)(Header);
