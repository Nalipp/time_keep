import { connect } from 'react-redux';
import FormInput from './form_input';
import { receiveCategory, removeCategory } from '../../actions/category_actions';

const mapDispatchToProps = dispatch => ({
  receiveCategory: (category) => dispatch(receiveCategory(category)),
  removeCategory: (category) => dispatch(removeCategory(category)),
})

export default connect(
  null,
  mapDispatchToProps,
)(FormInput);

