import React from 'react';

const ItemDisplay = ({ time, toggleForm, removeTime }) => {
  return (
    <div>
      <p onClick={toggleForm}>{time.id}</p>
      <p onClick={removeTime.bind(this, time)}>delete</p>
    </div>
  )
}

export default ItemDisplay;
