import React from 'react';

const TimeDisplay = ({ time }) => {
  const displayStyle = {
    padding: '.4em',
  }
  const format = time => String(time).length < 2 ? '0' + time : time;
  const convert = (miliseconds) => {
    const total = miliseconds / 1000;
    const sec = Math.floor(total % 60);
    const min = Math.floor((total / 60) % 60);
    const hour = Math.floor((total / 3600));

    return format(hour) + ':' + format(min) + ':' + format(sec); 
  }
  return (
    <p style={displayStyle}>{convert(time)}</p>
  )
}

export default TimeDisplay;


