import React from 'react';
import PropTypes from 'prop-types';

import { Loader, Image, Dimmer } from 'semantic-ui-react';

import bgImageUrl from '../../../assets/images/man-waiting.png';

const Loading = props => {
  return (
    <div className="loading">
      <Dimmer active>
        <Loader indeterminate size="large" inverted>
          {props.message}
        </Loader>
      </Dimmer>
      <Image src={bgImageUrl} className="loading-bg-image" />
    </div>
  );
};

Loading.propTypes = {
  message: PropTypes.string,
};

export default Loading;
