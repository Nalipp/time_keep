import { connect } from 'react-redux';
import { getTimeTotalByCategoryId } from '../../reducers/selectors';
import ItemDisplay from './item_display';

const mapStateToProps = (state, category) => ({
  timeTotal: getTimeTotalByCategoryId(state, category),
});

export default connect(
  mapStateToProps,
  null,
)(ItemDisplay);
