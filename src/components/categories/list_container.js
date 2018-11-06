import { connect } from 'react-redux';
import List from './list';
import { getAllCategories } from '../../reducers/selectors';

const mapStateToProps = state => ({
  categories : getAllCategories(state),
})

export default connect(
  mapStateToProps,
  null,
)(List);

