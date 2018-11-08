import React from 'react';

const ItemDisplay = ({topic, toggleDisplayForm, toggleDetail}) => {
  const itemDisplayStyle = {
    display: 'flex',
  }
  const itemDisplayEditStyle = {
    fontSize: '.7em',
    cursor: 'pointer',
    margin: '0 .8em 0 0',
  } 
  const itemStyle={
    cursor: 'pointer',
    width: '90%',
  }
  return (
    <div style={itemDisplayStyle}>
      <p style={itemDisplayEditStyle}
         onClick={toggleDisplayForm}>edit</p>
      <p style={itemStyle} 
        onClick={toggleDetail}>{topic.title}</p>
    </div>
  )
}

export default ItemDisplay;
