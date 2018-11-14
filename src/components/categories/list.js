import React from 'react';
import Item from 'components/categories/item';
import { connect } from 'react-redux';
import { getAllCategories } from 'reducers/selectors';
import * as actions from 'actions/category_actions';

const List = ({ categories, receiveCategory }) => {
  const containerStyle = {
    borderTop: '.12em solid darkgrey',
    height: '80%',
    overflow: 'hidden',
    overflowY: 'scroll',
    overflowX: 'scroll',
    minWidth: 0,
  }
  const ulStyle = {
    display: 'flex',
  }
  const buttonStyle = {
    background: 'lightgrey',
    borderRadius: '0 0 .4em .4em',
    fontSize: '.9em',
    padding: '.4em 1em',
  }
  const date = new Date();
  const newCategory = {id: date.getTime(), name: ''};
  const CategoriesUl = () => {
    return (
      <ul style={ulStyle}>
        {categories.map(category => (
          <li className='category-li' key={category.id}>
            <Item category={category} />
          </li>
        )).reverse()}
      </ul>
    )
  };
  return (
    <div style={containerStyle}>
      <button 
        onClick={receiveCategory.bind(this, newCategory)}
        style={buttonStyle}>+ category</button>
      <CategoriesUl />
    </div>
  )
}

const mapStateToProps = state => ({
  categories: getAllCategories(state),
});

export default connect(
  mapStateToProps,
  actions,
)(List);
