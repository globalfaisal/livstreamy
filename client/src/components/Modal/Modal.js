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
    const {
      isModalOpen,
      onDismiss,
      header,
      content,
      actions,
      size,
      dimmer,
    } = this.props;

    return (
      <Portal>
        <SModal
          color="black"
          open={isModalOpen}
          onClose={onDismiss}
          size={size || 'small'}
          dimmer={dimmer || true}
        >
          {header && <SModal.Header>{header}</SModal.Header>}
          <SModal.Content>{content}</SModal.Content>
          {actions && <SModal.Actions>{actions}</SModal.Actions>}
        </SModal>
      </Portal>
    );
  }
}

Modal.propTypes = {
  header: PropTypes.element,
  content: PropTypes.element.isRequired,
  actions: PropTypes.element,
  onDismiss: PropTypes.func,
  size: PropTypes.string,
  dimmer: PropTypes.string,
};

const mapStateToProps = state => ({ isModalOpen: state.isModalOpen });
const mapDispatchToProps = { openModal, closeModal };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
