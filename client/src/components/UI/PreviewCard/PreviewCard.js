/* --- libs --- */
import React from 'react';
import PropTypes from 'prop-types';

/* --- components --- */
import { Card, Image } from 'semantic-ui-react';

/* --- styles --- */
import './PreviewCard.scss';

const PreviewCard = props => {
  return (
    <div className="preview-card">
      <Card>
        <Image src={props.thumbnail} wrapped ui={false} />
        <Card.Content>
          <Card.Header as="h5">{props.title}</Card.Header>
          <Card.Description>{props.description}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

PreviewCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PreviewCard;
