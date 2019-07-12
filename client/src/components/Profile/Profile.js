/* -- libs -- */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* --- styles --- */
import './Profile.scss';

class Profile extends Component {
  renderProfile = () => {
    const { user } = this.props;
    if (!user) return null;

    return (
      <div className="profile">
        <div className="profile-avatar">
          <img
            src={user.imageUrl}
            className="profile-avatar-image"
            alt="avatar"
          />
          <p className="profile-avatar-name">{user.name || user.email}</p>
        </div>
      </div>
    );
  };
  render() {
    return this.renderProfile();
  }
}

const mapStateToProps = state => ({ user: state.auth.user });
export default connect(mapStateToProps)(Profile);
