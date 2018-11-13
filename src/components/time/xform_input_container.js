import { connect } from 'react-redux';
import { receiveTime } from '../../actions/time_actions';
import FormInput from './form_input';

const mapDispatchToProps = (dispatch, time) => ({
  receiveTime: (time) => dispatch(receiveTime(time)),
});

export default connect(
  null,
  mapDispatchToProps,
)(FormInput);

