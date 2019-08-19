/* -- libs -- */
import React from 'react';
import PropTypes from 'prop-types';

/* --- styles --- */
import './Profile.scss';

const Profile = ({ user }) => {
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

Profile.propTypes = {
  user: PropTypes.object,
};

export default Profile;
