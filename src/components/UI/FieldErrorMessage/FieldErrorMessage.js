/* --- libs --- */
import React from 'react';
import PropTypes from 'prop-types';

/* --- style--- */
import './FieldErrorMessage.scss';

const FieldErrorMessage = ({ message }) => (
  <div className="field-error-message">
    <p className="error-message">{message}</p>
  </div>
);

FieldErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FieldErrorMessage;
