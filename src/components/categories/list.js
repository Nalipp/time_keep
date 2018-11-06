import React from 'react';
import Item from './item';

const List = ({ categories }) => (
  <ul>
    {categories.map(category => (
      <li key={category.id}>
        <Item category={category} />
      </li>
    ))}
  </ul>
)

export default List;
