/* --- libs --- */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/* --- action creators --- */
import { closeModal } from '../../../actions/modalActions';
import { fetchStream, deleteStream } from '../../../actions/streamsActions';

/* --- components --- */
import Modal from './../../Modal/Modal';
import { Button, Icon } from 'semantic-ui-react';
import Loading from './../../UI/Loading/Loading';

/* --- helpers --- */
import history from '../../../utils/history/history';

import imageUrl from '../../../assets/images/man-delete.png';

/* --- styles --- */
import './StreamDelete.scss';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.preventUnAuthorizedDelete();
  }

  preventUnAuthorizedDelete = () => {
    const { currentUser, currentStream } = this.props;
    // navigate away if the user isn't the creator of the stream.
    if (!currentUser || !currentStream) {
      history.push('/streams');
      return null;
    }
    if (currentUser.id !== currentStream.user.id) history.push('/streams');
  };

  onDismiss = () => {
    history.goBack('/');
  };

  onDelete = () => {
    const { id } = this.props.match.params;
    if (!id) return null;
    this.props.deleteStream(id);
  };

  renderActions = () => (
    <Fragment>
      <Button onClick={this.onDismiss} animated="vertical" color="grey">
        <Button.Content visible>Cancel</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow left" />
        </Button.Content>
      </Button>

      <Button
        onClick={this.onDelete}
        animated="vertical"
        negative
        className="btn-delete"
      >
        <Button.Content visible>Delete</Button.Content>
        <Button.Content hidden>
          <Icon name="trash alternate outline" />
        </Button.Content>
      </Button>
    </Fragment>
  );

  renderContent = () => {
    return (
      <div className="stream-delete-content">
        <div className="image-wrap">
          <img src={imageUrl} alt="warning icon" />
        </div>
        <div className="message">
          <h3>
            Are you sure you want to
            <br /> delete this stream?
          </h3>
          <p>This action cannot be undone.</p>
        </div>
      </div>
    );
  };

  render() {
    const { currentStream } = this.props;
    if (!currentStream) return <Loading message="Please wait!" />;
    return (
      <Modal
        content={this.renderContent()}
        onDismiss={this.onDismiss}
        actions={this.renderActions()}
        size="tiny"
      />
    );
  }
}

const mapDispatchToProps = {
  closeModal,
  fetchStream,
  deleteStream,
};

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.auth.user,
  currentStream: state.streams[ownProps.match.params.id],
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamDelete);
