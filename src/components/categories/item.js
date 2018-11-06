import React from 'react';

const Item = ({category}) => (
  <p key={category.id} >{category.name}</p>
)

export default Item;
