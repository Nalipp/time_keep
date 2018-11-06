import React from 'react';

const ItemDisplay = ({category, toggleDisplayForm}) => (
  <p onClick={toggleDisplayForm}>{category.name}</p>
)

export default ItemDisplay;
