import { connect } from 'react-redux';
import List from './list';
import { getAllCategories } from '../../reducers/selectors';
import { receiveCategory } from '../../actions/category_actions';

const mapStateToProps = state => ({
  categories: getAllCategories(state),
});

const mapDispatchToProps = dispatch => ({
  receiveCategory: (category) => dispatch(receiveCategory(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

