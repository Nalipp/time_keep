import React from 'react';
import TotalTimeContainer from './total_time_container';
import TotalWeekTimeContainer from './total_week_time_container';

const Footer = () => {
  const containerStyle = { 
    borderTop: '.12em solid darkgrey',
    height: '10%',
  }
  const summariesStyle = {
    display: 'flex',
  }
  const labelStyle = {
    fontSize: '.8em',
    margin: '.6em .6em 0 .6em',
  }
  const innerContainerStyle = {
    flexDirection: 'column',
  }
  return (
    <div style={containerStyle}>
      <h2>Time Summary</h2>
      <div style={summariesStyle}>
        <div style={innerContainerStyle}>
          <p style={labelStyle}>All Time Total</p>
          <TotalTimeContainer />
        </div>
        <div style={innerContainerStyle}>
          <p style={labelStyle}>Weekly Total</p>
          <TotalWeekTimeContainer />
        </div>
      </div>
    </div>
  )
};

export default Footer;

