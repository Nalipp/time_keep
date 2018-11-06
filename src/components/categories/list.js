import React from 'react';
import Item from './item';

const List = ({ categories }) => (
  <ul style={{
    borderTop: '.12em solid darkgrey',
    height: '80%',
    overflow: 'hidden',
    overflowX: 'scroll',
    minWidth: 0,
    display: 'flex',
  }}>
    {categories.map(category => (
      <li key={category.id}>
        <Item category={category} />
      </li>
    ))}
  </ul>
)

export default List;
