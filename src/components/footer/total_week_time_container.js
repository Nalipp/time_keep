import { connect } from 'react-redux';
import { getTimeTotalByWeek } from '../../reducers/selectors';
import TimerDisplay from '../time/timer_display';

const mapStateToProps = state => ({
  time: getTimeTotalByWeek(state),
});

export default connect(
  mapStateToProps,
  null,
)(TimerDisplay);


