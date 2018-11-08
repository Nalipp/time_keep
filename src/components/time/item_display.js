import React from 'react';

const ItemDisplay = ({ time, removeTime }) => {
  return (
    <div>
      <p>{time.id}</p>
      <p onClick={removeTime.bind(this, time)}>delete</p>
    </div>
  )
}

export default ItemDisplay;
