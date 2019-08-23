/* --- libs --- */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import flvjs from 'flv.js';

/* --- action creators --- */
import { fetchStream } from '../../../actions/streamsActions';
import Loading from './../../UI/Loading/Loading';

/* --- styles --- */
import './StreamWatch.scss';
import { Card } from 'semantic-ui-react';

class StreamWatch extends Component {
  constructor() {
    super();
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    // clean up the video player
    this.player.destroy();
  }

  buildPlayer = () => {
    if (this.player || !this.props.stream) return;

    const { id } = this.props.match.params;

    // load the live stream through http-flv
    this.player = flvjs.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
    this.player.play();
  };

  renderContent = () => {
    const { stream } = this.props;
    if (!stream) return <Loading message="Please wait!" />;

    return (
      <div className="stream-watch container">
        <Card inverted>
          <Card.Content className="video-wrapper">
            <video ref={this.videoRef} controls className="video-player" />
          </Card.Content>
          <Card.Content className="video-meta">
            {/* <div className="meta-header">{stream.actions}</div> */}
            <Card.Header as="h5">{stream.title}</Card.Header>
            <Card.Description>{stream.description}</Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
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
