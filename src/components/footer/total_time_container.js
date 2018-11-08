import { connect } from 'react-redux';
import { getTimeTotal } from '../../reducers/selectors';
import TimerDisplay from '../time/timer_display';

const mapStateToProps = state => ({
  time: getTimeTotal(state),
});

export default connect(
  mapStateToProps,
  null,
)(TimerDisplay);

