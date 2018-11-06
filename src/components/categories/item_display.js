import React from 'react';

const ItemDisplay = ({category, toggleDisplayForm}) => {
  const itemDisplayStyle = {
    display: 'flex',
  }
  const itemDisplayEditStyle = {
    fontSize: '.7em',
    cursor: 'pointer',
    padding: '0 .8em 0 0',
  }
  return (
    <div style={itemDisplayStyle}>
      <p style={itemDisplayEditStyle}
         onClick={toggleDisplayForm}>edit</p>
      <p >{category.name}</p>
    </div>
  )
}

export default ItemDisplay;
