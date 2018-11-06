import React from 'react';
import ItemContainer from './item_container';

const List = ({ categories }) => (
  <ul>
    {categories.map(category => (
      <li key={category.id}>
        <ItemContainer category={category} />
      </li>
    ))}
  </ul>
)

export default List;
