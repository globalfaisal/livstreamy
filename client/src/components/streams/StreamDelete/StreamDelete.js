/* --- libs --- */
import React from 'react';
import { connect } from 'react-redux';

/* --- components --- */
import Modal from './../../Modal/Modal';
import { Button, Icon } from 'semantic-ui-react';

/* --- action creators --- */
import { closeModal } from '../../../actions/modalActions';
import { deleteStream } from '../../../actions/streamsActions';

/* --- helpers --- */
import history from '../../../utils/history/history';

import imageUrl from '../../../assets/images/man-delete.png';

/* --- styles --- */
import './StreamDelete.scss';

const StreamDelete = props => {
  const onClose = () => {
    props.closeModal();
    history.goBack('/');
  };

  const onDelete = () => {
    const { id } = props.match.params;
    if (!id) return null;
    props.deleteStream(id);
  };

  const renderContent = () => {
    return (
      <div className="stream-delete">
        <div className="image-wrap">
          <img src={imageUrl} alt="warning icon" />
        </div>
        <div className="content">
          <h3>Are you sure you want to delete?</h3>
          <p>This action cannot be undone!</p>
          <div className="actions">
            <Button onClick={onClose} animated="vertical" color="grey">
              <Button.Content visible>Cancel</Button.Content>
              <Button.Content hidden>
                <Icon name="close" />
              </Button.Content>
            </Button>

            <Button
              onClick={onDelete}
              animated="vertical"
              className="btn-delete"
            >
              <Button.Content visible>Delete</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </div>
        </div>
      </div>
    );
  };
  return <Modal content={renderContent()} size="tiny" />;
};

const mapDispatchToProps = {
  closeModal,
  deleteStream,
};
export default connect(
  null,
  mapDispatchToProps
)(StreamDelete);
