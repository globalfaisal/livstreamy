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
    this.checkAuthorizedAccess();
  }

  checkAuthorizedAccess = () => {
    const { currentUser, stream } = this.props;
    // Navigate away from this component
    // if the user is not the owner
    if (currentUser.id !== stream.user.id) history.push('/streams');
  };

  onSubmit = formValues => {
    const { id } = this.props.match.params;
    this.props.editStream(id, formValues);
  };

  renderContent = () => {
    const { stream } = this.props;
    if (!stream) return <Loading message="Please wait!" />;

    return (
      <div className="stream-edit ui container">
        <section className="intro-section">
          <h2>Edit Stream Details! </h2>
        </section>
        <section className="form-section">
          <StreamForm
            onSubmit={this.onSubmit}
            // reduxForm special prop.
            initialValues={_.pick(this.props.stream, 'title', 'description')}
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
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamEdit);
