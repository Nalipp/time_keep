import { connect } from 'react-redux';
import FormInput from './form_input';
import { receiveCategory } from '../../actions/category_actions';

const mapDispatchToProps = dispatch => ({
  receiveCategory: (category) => dispatch(receiveCategory(category)),
})

export default connect(
  null,
  mapDispatchToProps,
)(FormInput);



