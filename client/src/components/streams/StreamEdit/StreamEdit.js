/* --- libs --- */
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

/* --- action creators --- */
import { editStream, fetchStream } from '../../../actions/streamsActions';

/* --- components --- */
import StreamForm from '../StreamForm/StreamForm';
import Loading from '../../UI/Loading/Loading';

/* --- helpers --- */
import history from '../../../utils/history/history';

/* --- styles --- */
import './StreamEdit.scss';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.preventUnAuthorizedChanges();
  }

  componentDidUpdate() {
    this.preventUnAuthorizedChanges();
  }

  preventUnAuthorizedChanges = () => {
    const { currentUser, currentStream } = this.props;
    if (!currentUser || !currentStream) return;

    // navigate away if the user isn't the creator of the stream.
    if (currentUser.id !== currentStream.user.id) history.push('/streams');
  };

  onSubmit = formValues => {
    const { id } = this.props.match.params;
    this.props.editStream(id, formValues);
  };

  renderContent = () => {
    const { currentStream } = this.props;
    if (!currentStream) return <Loading message="Please wait!" />;

    return (
      <div className="stream-edit ui container">
        <section className="intro-section">
          <h2>Edit Stream Details! </h2>
        </section>
        <section className="form-section">
          <StreamForm
            onSubmit={this.onSubmit}
            // reduxForm special prop.
            initialValues={_.pick(
              this.props.currentStream,
              'title',
              'description'
            )}
          />
        </section>
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

const mapDispatchToProps = { editStream, fetchStream };

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.auth.user,
    currentStream: state.streams[ownProps.match.params.id],
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamEdit);
