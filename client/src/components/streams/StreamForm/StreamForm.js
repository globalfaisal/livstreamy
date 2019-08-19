/* --- libs --- */
import React from 'react';
import { reduxForm, Fields } from 'redux-form';
import PropTypes from 'prop-types';

/* --- components --- */
import FieldErrorMessage from '../../UI/FieldErrorMessage/FieldErrorMessage';
import { Form, Button, Icon } from 'semantic-ui-react';

const StreamForm = props => {
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
    props.onSubmit(formValues);
  };

  return (
    <Form
      onSubmit={props.handleSubmit(onSubmit)}
      inverted
      className="stream-form"
    >
      <Fields
        names={['title', 'description', 'terms']}
        component={renderInput}
      />

      <Button type="submit" animated className="btn-submit primary">
        <Button.Content visible>Save</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </Form>
  );
};

StreamForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
};

const validate = formValues => {
  const errors = {};

  if (!formValues.title) errors.title = 'Title is required ';

  if (!formValues.description)
    errors.description = 'Provide descripton for your live stream';

  if (!formValues.terms) errors.terms = 'You must accept the terms!';

  return errors;
};

export default reduxForm({
  form: 'stream-form', // unique form name
  validate: validate,
})(StreamForm);
