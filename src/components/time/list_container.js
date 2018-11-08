import { connect } from 'react-redux';
import { getTimesByTopicId } from '../../reducers/selectors';
import List from './list';

const mapStateToProps = (state, { topic }) => ({
  times: getTimesByTopicId(state, topic),
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

