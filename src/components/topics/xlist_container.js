import { connect } from 'react-redux';
import { getTopicsByCategoryId } from '../../reducers/selectors';
import List from './list';
import { receiveTopic } from '../../actions/topic_actions';

const mapStateToProps = (state, {category}) => ({
  topics: getTopicsByCategoryId(state, category),
});

const mapDispatchToProps = dispatch => ({
  receiveTopic: (topic) => dispatch(receiveTopic(topic)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

