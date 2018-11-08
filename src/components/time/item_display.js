import React from 'react';

const ItemDisplay = ({ time, toggleForm }) => (
  <p onClick={toggleForm}>{time.id}</p>
)

export default ItemDisplay;
