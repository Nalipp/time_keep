import React from 'react';
import TimerDisplay from './timer_display';
import { connect } from 'react-redux';
import * as actions from '../../actions/time_actions';

const ItemDisplay = ({ time, removeTime }) => {
  const containerStyle = {
    display: 'flex',
    position: 'relative',
    padding: '.3em',
    fontSize: '.5em',
  }
  const dateStyle = {
    padding: '.4em .8em 0 0',
  }
  const deleteStyle = {
    fontSize: '.7em',
    cursor: 'pointer',
    position: 'absolute',
    top: '.4em', right: '0',
  }
  return (
    <div style={containerStyle}>
      <p style={dateStyle}>
        {new Date(time.endtime).toString().slice(0, 15)}</p>
      <TimerDisplay time={time.totalTime} />
      <p style={deleteStyle}
        onClick={removeTime.bind(this, time)}>delete</p>
    </div>
  )
}

export default connect(null, actions)(ItemDisplay);
