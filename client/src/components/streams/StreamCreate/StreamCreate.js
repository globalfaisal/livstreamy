/* --- libs --- */
import React from 'react';
import { connect } from 'react-redux';

/* --- action creators --- */
import { createStream } from '../../../actions/streamsActions';

/* --- components --- */
import StreamForm from '../StreamForm/StreamForm';

/* --- styles --- */
import './StreamCreate.scss';

const StreamCreate = props => {
  const onSubmit = formValues => {
    props.createStream(formValues);
  };

  return (
    <div className="stream-create ui container">
      <section className="intro-section">
        <h2>Create Stream! </h2>
        <p className="long-text">
          Live streaming is an easy way to reach your audience in real time.
          <br />
          hosting a live Q&A session ? streaming a video game ? or teaching a
          class?{' '}
          <span role="img" aria-label="live">
            DO IT LIVE! 📡
          </span>
        </p>
      </section>
      <section className="form-section">
        <StreamForm onSubmit={onSubmit} />
      </section>
    </div>
  );
};

const mapDispatchToProps = { createStream };

export default connect(
  null,
  mapDispatchToProps
)(StreamCreate);
