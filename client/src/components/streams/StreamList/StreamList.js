/* --- libs --- */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/* --- action creators --- */
import { fetchStreams } from '../../../actions/streamsActions';

/* --- components --- */
import PreviewCard from '../../UI/PreviewCard/PreviewCard';
import Profile from '../../Profile/Profile';
import { Button } from 'semantic-ui-react';

import vidPlaceholder from '../../../assets/images/video-placeholder.png';
/* --- styles --- */
import './StreamList.scss';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderChannel = stream => {
    const { currentUser } = this.props;
    if (currentUser && currentUser.id === stream.user.id) {
      return (
        <Fragment>
          <Profile user={stream.user} />
          <div className="channel-actions">
            <Button color="black" icon="edit outline" size="tiny" />
            <Button color="black" icon="trash alternate outline" size="tiny" />
          </div>
        </Fragment>
      );
    }
    return <Profile user={stream.user} />;
  };

  renderList = () => {
    const { streams } = this.props;
    if (streams.length === 0) return null;
    return (
      <ul className="stream-list container">
        {streams.map(stream => (
          <li key={stream.id} className="stream-item">
            <PreviewCard
              thumbnail={vidPlaceholder}
              title={stream.title}
              description={stream.description}
              channel={this.renderChannel(stream)}
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
  currentUser: state.auth.user,
});
const mapDispatchToProps = { fetchStreams };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamList);
