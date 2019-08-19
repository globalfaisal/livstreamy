/* --- libs --- */
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Fields } from 'redux-form';

/* --- action creators --- */
import { createStream } from '../../../actions/streamsActions';

/* --- components --- */
import FieldErrorMessage from '../../UI/FieldErrorMessage/FieldErrorMessage';
import { Form, Button, Icon } from 'semantic-ui-react';

/* --- styles --- */
import './StreamCreate.scss';

const StreamCreate = props => {
  const renderFieldError = ({ touched, error, active }) => {
    return touched && error && !active && <FieldErrorMessage message={error} />;
  };

  const renderInput = ({ title, description, terms }) => (
    <React.Fragment>
      <Form.Input
        {...title.input}
        required
        autoComplete="off"
        label="Title"
        placeholder="Ask me anything!"
        className={`${
          title.meta.touched && title.meta.error && !title.meta.active
            ? 'error'
            : ''
        }`}
      />
      {renderFieldError(title.meta)}
      <Form.TextArea
        {...description.input}
        required
        label="Description"
        placeholder="Pssstttt...It's Q&A time, send your questions @twitter_handle. 👏"
        className={`${
          description.meta.touched &&
          description.meta.error &&
          !description.meta.active
            ? 'error'
            : ''
        }`}
      />
      {renderFieldError(description.meta)}

      <Form.Checkbox
        {...terms.input}
        label="I agree to the Terms and Conditions"
        required
        className={`${
          terms.meta.touched && terms.meta.error && !description.meta.active
            ? 'error'
            : ''
        }`}
      />
    </React.Fragment>
  );

  const onSubmit = formValues => {
    // check that values are not only white space
    if (!formValues.title.trim() || !formValues.description.trim()) return;

    // dispatch the form data
    props.createStream(formValues);
  };

  return (
    <div className="stream-create ui container">
      <section className="intro-section">
        <h1>Do it live! </h1>
        <p className="long-text">
          Live streaming is an easy way to reach your audience in real time.
          <br />
          hosting a live Q&A session ? streaming a video game ? or teaching a
          class?
          <span role="img" aria-label="live">
            Go Live Now 📡
          </span>
        </p>
      </section>
      <section className="form-section">
        <Form
          onSubmit={props.handleSubmit(onSubmit)}
          inverted
          className="streamCreate-form "
        >
          <Fields
            names={['title', 'description', 'terms']}
            component={renderInput}
          />

          <Button type="submit" animated className="btn-submit primary">
            <Button.Content visible>Submit</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Form>
      </section>
    </div>
  );
};

const validate = formValues => {
  const errors = {};

  if (!formValues.title) errors.title = 'Title is required ';

  if (!formValues.description)
    errors.description = 'Provide descripton for your live stream';

  if (!formValues.terms) errors.terms = 'You must accept the terms!';

  return errors;
};

const mapDispatchToProps = { createStream };

const streamCreateWrapped = reduxForm({
  form: 'stream-create-form', // unique form name
  validate: validate,
})(StreamCreate);

export default connect(
  null,
  mapDispatchToProps
)(streamCreateWrapped);
