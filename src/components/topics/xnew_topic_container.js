import { connect } from 'react-redux';
import NewTopic from './new_topic';
import { receiveTopic } from '../../actions/topic_actions';

const mapDispatchToProps = dispatch => ({
  receiveTopic: (topic) => dispatch(receiveTopic(topic)),
});

export default connect(
  null,
  mapDispatchToProps,
)(NewTopic);



