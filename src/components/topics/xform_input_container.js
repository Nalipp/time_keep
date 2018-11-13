import { connect } from 'react-redux';
import FormInput from './form_input';
import { receiveTopic, removeTopic } from '../../actions/topic_actions';

const mapDispatchToProps = dispatch => ({
  receiveTopic: (category) => dispatch(receiveTopic(category)),
  removeTopic: (category) => dispatch(removeTopic(category)),
})

export default connect(
  null,
  mapDispatchToProps,
)(FormInput);




