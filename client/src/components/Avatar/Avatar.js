/* -- libs -- */
import React from 'react';
import PropTypes from 'prop-types';

/* --- components --- */
import { Image } from 'semantic-ui-react';

/* --- styles --- */
import './Avatar.scss';

const Avatar = props => {
  if (!props.user) return null;

  return (
    <div className="avatar">
      <Image avatar src={props.user.imageUrl} className="avatar-image" />
      {props.showName && (
        <span className="avatar-name">
          {props.user.name || props.user.email}
        </span>
      )}
    </div>
  );
};

Avatar.defaultProps = {
  showName: false,
};

Avatar.propTypes = {
  user: PropTypes.object.isRequired,
  showName: PropTypes.bool,
};

export default Avatar;
