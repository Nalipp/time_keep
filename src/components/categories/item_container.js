import { connect } from 'react-redux';
import Item from './item';
import { receiveCategory } from '../../actions/category_actions';

const mapDispatchToProps = dispatch => ({
  receiveCategory: (category) => dispatch(receiveCategory(category)),
})

export default connect(
  null,
  mapDispatchToProps,
)(Item);


