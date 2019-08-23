/* --- libs --- */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* --- components --- */
import { Card, Image } from 'semantic-ui-react';

/* --- styles --- */
import './PreviewCard.scss';

const PreviewCard = props => {
  return (
    <div className="preview-card">
      <Card>
        <Card.Content>
          <Link to={props.url}>
            <Image
              src={props.thumbnail}
              wrapped
              ui={false}
              className="card-thumbnail"
            />
          </Link>
        </Card.Content>
        <Card.Content className="meta">
          <div className="meta-header">
            {props.channel} {props.actions}
          </div>
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
  channel: PropTypes.node,
  actions: PropTypes.node,
};

export default PreviewCard;
