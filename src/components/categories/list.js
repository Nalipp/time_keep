import React from 'react';
import Item from './item';

const List = ({ categories, receiveCategory }) => {
  const containerStyle = {
    borderTop: '.12em solid darkgrey',
    height: '80%',
    overflow: 'hidden',
    overflowX: 'scroll',
    minWidth: 0,
  }
  const ulStyle = {
    display: 'flex',
  }
  const buttonStyle = {
    background: 'lightgrey',
    borderRadius: '0 0 .4em .4em',
    fontSize: '1.5em',
    padding: '0 1.5em',
  }
  const date = new Date();
  const newCategory = {id: date.getTime(), name: ''};
  return (
    <div style={containerStyle}>
      <button style={buttonStyle}
        onClick={receiveCategory.bind(this, newCategory)}>+</button>
      <ul style={ulStyle}>
        {categories.map(category => (
          <li key={category.id}>
            <Item category={category} />
          </li>
        )).reverse()}
      </ul>
    </div>
  )
}

export default List;
