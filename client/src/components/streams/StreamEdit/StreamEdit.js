/* --- libs --- */
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

/* --- action creators --- */
import { editStream, fetchStream } from '../../../actions/streamsActions';

/* --- components --- */
import StreamForm from '../StreamForm/StreamForm';

/* --- styles --- */
import './StreamEdit.scss';
import Loading from '../../UI/Loading/Loading';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  //TODO: NAVIGATE AWAY FROM THIS PAGE IF THE USER ID ISN'T THE ONE IN THE STREAM.

  onSubmit = formValues => {
    const {
      stream: { id },
    } = this.props;
    // dispatch the form data
    this.props.editStream(id, formValues);
  };

  render() {
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
            // reduxForm speacial prop.
            initialValues={_.pick(this.props.stream, 'title', 'description')}
          />
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = { editStream, fetchStream };

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamEdit);
