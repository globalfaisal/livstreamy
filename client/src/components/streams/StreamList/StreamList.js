/* --- libs --- */
import React from 'react';
import { connect } from 'react-redux';

/* --- action creators --- */
import { fetchStreams } from '../../../actions/streamsActions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = () => {
    console.log(this.props.streams);
    return 'Stream List';
  };
  render() {
    return this.renderList();
  }
}

const mapStateToProps = state => ({ streams: Object.values(state.streams) });
const mapDispatchToProps = { fetchStreams };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamList);
