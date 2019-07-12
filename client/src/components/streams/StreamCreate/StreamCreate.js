/* --- libs --- */
import React from 'react';
import { connect } from 'react-redux';
import { Fields, reduxForm } from 'redux-form';

/* --- action creators --- */
import { createStream, deleteStream } from '../../../actions/streamActions';

/* --- components --- */
import FieldErrorMessage from '../../UI/FieldErrorMessage/FieldErrorMessage';
import { Form, Button, Icon } from 'semantic-ui-react';

/* --- styles --- */
import './StreamCreate.scss';

class StreamCreate extends React.Component {
  renderFieldError = ({ touched, error, active }) => {
    return touched && error && !active && <FieldErrorMessage message={error} />;
  };

  renderInput = ({ title, description, terms }) => (
    <React.Fragment>
      <Form.Input
        {...title.input}
        required
        label="Title"
        placeholder="Ask me anything!"
        className={`${
          title.meta.touched && title.meta.error && !title.meta.active
            ? 'error'
            : ''
        }`}
      />
      {this.renderFieldError(title.meta)}
      <Form.TextArea
        {...description.input}
        required
        label="Description"
        placeholder="Pssstttt...It's Q&A time, send your questions @twiter_handle. 👏"
        className={`${
          description.meta.touched &&
          description.meta.error &&
          !description.meta.active
            ? 'error'
            : ''
        }`}
      />
      {this.renderFieldError(description.meta)}

      <Form.Checkbox
        {...terms.input}
        label="I agree to the Terms and Conditions"
        className={`${terms.meta.touched && terms.meta.error ? 'error' : ''}`}
        required
      />
    </React.Fragment>
  );

  onSubmit = formData => {
    // return input fields value contains only white space
    if (!formData.title.trim() || !formData.description.trim()) return;
    // dispatch the form data
    this.props.createStream(formData);
  };

  render() {
    return (
      <div className="stream-create ui container">
        <section className="intro-section">
          <h1>Do it live! </h1>
          <p className="long-text">
            Live streaming is an easy way to reach your audience in real time.
            <br />
            hosting a live Q&A session ? streaming a video game ? or teaching a
            class? <span> Go Live Now 📡 </span>
          </p>
        </section>
        <section className="form-section">
          <Form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            inverted
            className="streamCreate-form "
          >
            <Fields
              names={['title', 'description', 'terms']}
              component={this.renderInput}
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
  }
}

const validate = formValues => {
  const error = {};

  if (!formValues.title) error.title = '☹ Title is required ';

  if (!formValues.description)
    error.description = '☹ Please provide descripton for your live stream';

  if (!formValues.terms) error.terms = '☹ You must accept the terms!';

  return error;
};

const mapDispatchToProps = { createStream, deleteStream };

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

export default connect(
  null,
  mapDispatchToProps
)(formWrapped);
