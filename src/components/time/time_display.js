import React from 'react';

const TimeDisplay = ({ time }) => {
  const displayStyle = {
    padding: '.4em',
  }
  const format = (t) => {
    return '00:00:0' + t;
  }
  return (
    <p style={displayStyle}>{format(time)}</p>
  )
}

export default TimeDisplay;


