/* --- libs --- */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Segment, Form, Button } from 'semantic-ui-react';

class StreamCreate extends React.Component {
  renderInput = ({ input, placeholder }) => (
    <Form.Input {...input} placeholder={placeholder} />
  );

  renderTextArea = ({ input, placeholder }) => (
    <Form.TextArea {...input} placeholder={placeholder} />
  );

  renderCheckBox = ({ input, label }) => {
    return <Form.Checkbox {...input} label={label} />;
  };

  onSubmit = formValues => {
    console.log(formValues);
  };
  render() {
    return (
      <Segment inverted>
        <Form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          inverted
          className="streamCreate-form"
        >
          <Field
            name="title"
            component={this.renderInput}
            placeholder="Title"
          />
          <Field
            name="description"
            component={this.renderTextArea}
            placeholder="Description"
          />
          <Field
            name="terms"
            component={this.renderCheckBox}
            label="I agree to the Terms and Conditions"
          />

          <Button type="submit" size="small">
            Go Live
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
