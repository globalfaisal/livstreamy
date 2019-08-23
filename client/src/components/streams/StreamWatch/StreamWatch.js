/* --- libs --- */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* --- action creators --- */
import { fetchStream } from '../../../actions/streamsActions';
import Loading from './../../UI/Loading/Loading';

/* --- styles --- */
import './StreamWatch.scss';
class StreamWatch extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent = () => {
    const { stream } = this.props;
    if (!stream) return <Loading message="Please wait!" />;
    return <div className="stream-watch container">{stream.title}</div>;
  };
  render() {
    return this.renderContent();
  }
}

const mapDispatchToProps = { fetchStream };
const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamWatch);
