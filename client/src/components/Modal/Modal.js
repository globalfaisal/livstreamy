/* --- libs --- */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* --- action creators --- */
import { openModal, closeModal } from './../../actions/modalActions';

/* --- components --- */
import Portal from '../Portal/Portal';
import { Modal as SModal } from 'semantic-ui-react';

class Modal extends Component {
  componentDidMount() {
    this.props.openModal();
  }
  componentWillUnmount() {
    this.props.closeModal();
  }

  render() {
    const { isOpen, content, size } = this.props;
    return (
      <Portal>
        <SModal
          color="black"
          open={isOpen}
          closeOnDimmerClick={true}
          closeOnEscape={true}
          size={size || 'large'}
        >
          <SModal.Content>{content}</SModal.Content>
        </SModal>
      </Portal>
    );
  }
}

Modal.propTypes = {
  content: PropTypes.element.isRequired,
  size: PropTypes.string,
};

const mapStateToProps = state => ({ isOpen: state.modal.isOpen });
const mapDispatchToProps = { openModal, closeModal };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
