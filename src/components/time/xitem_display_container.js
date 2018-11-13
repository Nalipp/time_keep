import { connect } from 'react-redux';
import { removeTime } from '../../actions/time_actions';
import ItemDisplay from './item_display';

const mapDispatchToProps = (dispatch, time) => ({
  removeTime: (time) => dispatch(removeTime(time)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ItemDisplay);
