import React from 'react';
import TimerDisplay from 'components/time/timer_display';
import { connect } from 'react-redux';
import { getTimeTotalByCategoryId } from 'reducers/selectors';

const ItemDisplay = ({category, toggleDisplayForm, timeTotal}) => {
  const itemDisplayStyle = {
    display: 'flex',
  }
  const itemDisplayEditStyle = {
    fontSize: '.7em',
    cursor: 'pointer',
    padding: '0 .8em 0 0',
  } 
  const categoryStyle = {
    display: 'flex',
    fontSize: '.9em',
  }
  const categoryNameStyle = {
    padding: '.3em .8em 0 0',
    fontSize: '1.1em',
  }
  const timerDisplayStyle = {

  }
  return (
    <div style={itemDisplayStyle}>
      <p style={itemDisplayEditStyle}
         onClick={toggleDisplayForm}>edit</p>
      <div style={categoryStyle}>
        <p 
          style={categoryNameStyle}>{category.name}</p>
        <TimerDisplay 
          style={timerDisplayStyle}
          time={timeTotal} />
      </div>
    </div>
  )
}

const mapStateToProps = (state, category) => ({
  timeTotal: getTimeTotalByCategoryId(state, category),
});

export default connect(mapStateToProps, null)(ItemDisplay);
