import React from 'react';
import TimerControl from '../time/timer_control';

const Detail = ({ topic, toggleDetail }) => {
  const toggleStyle = {
    width: '20%',
    cursor: 'pointer',
  }
  const labelStyle = {
    margin: '1em 0 .2em 1em',
    fontSize: '.6em',
  }
  const titleStyle = {
    margin: '0 0 0 1em',
  }
  const detailStyle = {
    margin: '.3em 0 0 1.5em',
    fontSpacing: '.05em',
    fontSize: '.8em',
  }
  const controlStyle = {
    display: 'flex',
  }
  return (
    <ul>
      <div style={controlStyle}>
        <p style={toggleStyle}
          onClick={toggleDetail}>X</p>
        <TimerControl topic={topic} />
      </div>
      <li>
        <p style={labelStyle}>title</p>
        <p style={titleStyle}>{topic.title}</p>
      </li>
      <li>
        <p style={labelStyle}>description</p>
        <p 
          className="detail-topic-description"
          style={detailStyle}>{topic.description}</p>
      </li>
    </ul>
  )
}

export default Detail
