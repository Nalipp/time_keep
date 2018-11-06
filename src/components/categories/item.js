import React from 'react';

const Item = ({category, receiveCategory}) => (
  <p key={category.id} >{category.name}</p>
)

export default Item;
