/* --- libs --- */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/* --- action creators --- */
import { fetchStreams } from '../../../actions/streamsActions';

/* --- components --- */
import PreviewCard from '../../UI/PreviewCard/PreviewCard';
import Avatar from '../../Avatar/Avatar';
import { Button } from 'semantic-ui-react';

import vidPlaceholder from '../../../assets/images/video-placeholder.jpeg';
/* --- styles --- */
import './StreamList.scss';
import EmptyPage from '../../UI/EmptyPage/EmptyPage';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderControls = stream => {
    const { auth } = this.props;
    if (!auth.isSignedIn || !stream.user) return null;
    if (auth.user.id === stream.user.id) {
      return (
        <div className="stream-controls">
          <Link to={`/streams/edit/${stream.id}`} className="btn-stream-edit">
            <Button icon="edit outline" color="black" size="tiny" />
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="btn-stream-delete"
          >
            <Button icon="trash alternate outline" color="black" size="tiny" />
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    const { streams } = this.props;
    if (streams.length === 0)
      return (
        <EmptyPage
          title="No live streams currently available!"
          extra="Please check back later."
        />
      );
    return (
      <ul className="stream-list container">
        {streams.map(stream => (
          <li key={stream.id} className="stream-item">
            <PreviewCard
              url={`/streams/${stream.id}`}
              thumbnail={vidPlaceholder}
              title={stream.title}
              description={stream.description}
              channel={<Avatar user={stream.user} showName={true} />}
              actions={this.renderControls(stream)}
            />
          </li>
        ))}
      </ul>
    );
  };
  render() {
    return this.renderList();
  }
}

const mapStateToProps = state => ({
  streams: Object.values(state.streams),
  auth: state.auth,
});
const mapDispatchToProps = { fetchStreams };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamList);
