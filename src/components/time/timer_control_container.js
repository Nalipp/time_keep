import { connect } from 'react-redux';
import { receiveTime } from '../../actions/time_actions';
import TimerControl from './timer_control';

const mapDispatchToProps = dispatch => ({
  receiveTime: (time) => dispatch(receiveTime(time)),
});

export default connect(
  null,
  mapDispatchToProps,
)(TimerControl);


