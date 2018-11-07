import { connect } from 'react-redux';
import { receiveTime } from '../../actions/time_actions';
import { getTimeTotalByTopicId } from '../../reducers/selectors';
import TimerControl from './timer_control';

const mapStateToProps = (state, {topic}) => ({
  timeTotal: getTimeTotalByTopicId(state, topic),
});

const mapDispatchToProps = dispatch => ({
  receiveTime: (time) => dispatch(receiveTime(time)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimerControl);


