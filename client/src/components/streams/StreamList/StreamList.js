/* --- libs --- */
import React from 'react';
import { connect } from 'react-redux';

/* --- action creators --- */
import { fetchStreams } from '../../../actions/streamsActions';

/* --- components --- */
import PreviewCard from '../../UI/PreviewCard/PreviewCard';
import vidPlaceholder from '../../../assets/images/video-placeholder.png';

/* --- styles --- */
import './StreamList.scss';
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = () => {
    const { streams } = this.props;
    if (streams.length === 0) return null;
    return (
      <div className="stream-list container">
        {streams.map(stream => (
          <PreviewCard
            key={stream.id}
            thumbnail={vidPlaceholder}
            title={stream.title}
            description={stream.description}
          />
        ))}
      </div>
    );
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
