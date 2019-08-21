/* --- libs --- */
import React from 'react';
import PropTypes from 'prop-types';

/* --- components --- */
import { Image } from 'semantic-ui-react';

import imageUrl from '../../../assets/images/man-empty.png';

/* --- styles --- */
import './EmptyPage.scss';

const EmptyPage = props => {
  return (
    <div className="empty-page">
      <div className="content">
        <Image src={imageUrl} circular />
        <h3 className="title">{props.title}</h3>
        <p className="extra">{props.extra}</p>
      </div>
    </div>
  );
};

EmptyPage.propTypes = {
  title: PropTypes.string.isRequired,
  extra: PropTypes.string.isRequired,
};

export default EmptyPage;
