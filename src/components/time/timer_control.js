import React from 'react';
import TimeDisplay from './time_display';

class TimerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      timeRunning: false,
      startTime: null,
      stopTime: null,
      displayTimeLog: false,
    }
    this.tick = this.tick.bind(this);
    this.startTick = this.startTick.bind(this);
    this.stopTick = this.stopTick.bind(this);
    this.toggleTimeLog = this.toggleTimeLog.bind(this);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState({time: this.state.time + 1});
  }
  startTick() {
    const timestamp = new Date();
    const startTime = timestamp.getTime();
    this.setState({
      timeRunning: !this.state.timeRunning,
      startTime: startTime,
    });
    clearInterval(this.timer);
    this.timer = setInterval(this.tick, 1000);
  }
  stopTick() {
    const timestamp = new Date();
    const stopTime = timestamp.getTime();
    this.setState({
      timeRunning: !this.state.timeRunning,
      stopTime: stopTime,
    }, () => {
      const newTime = {
        id: stopTime,
        topicId: this.props.topic.id,
        startTime: this.state.startTime, 
        endtime: this.state.stopTime, 
        totalTime: this.state.stopTime - this.state.startTime,
      }
      this.props.receiveTime(newTime);
    });
    clearInterval(this.timer);
    this.setState({time: 0});
  }
  toggleTimeLog() {
    console.log(!this.state.displayTimeLog) 
    this.setState({displayTimeLog: !this.state.displayTimeLog});
  }
  render() {
    const buttonStyle = {
      padding: '.3em .4em',
      color: 'white',
      borderRadius: '.4em',
      border: 'none',
      letterSpacing: '.1em',
      fontSize: '.8em',
      width: '4em',
      margin: 'auto',
    }
    const startButtonStyle = {
      background: '#72DA66',
    }
    const stopButtonStyle = {
      background: 'tomato',
    }
    const outerContainer = {
      border: '.04em solid #74C4F9',
      borderRadius: '.4em',
      padding: '.4em',
    }
    const innerContainer = {
      display: 'flex',
    }
    const editStyle = {
      fontSize: '.7em',
      padding: '0 .6em 0 0 ',
    }
    const timeDisplayStyle = {
      display: 'flex',
      margin: '1em 0 0 0',
      cursor: 'pointer',
    }
    const totalTimeStyle = {
      padding: '.6em 0 0 0',
      fontSize: '.8em',
    }
    return (
      <div style={outerContainer}>
        <div style={innerContainer}>
          {this.state.timeRunning 
            ?
            <button 
              style={{...buttonStyle, ...stopButtonStyle}}
              onClick={this.stopTick}
              >stop</button>
            :
            <button 
              style={{...buttonStyle, ...startButtonStyle}}
              onClick={this.startTick}>start</button>}

            <div style={{width: '50%'}}>
              <TimeDisplay time={this.state.time}/>
            </div>
        </div>
        <div style={timeDisplayStyle}
          onClick={this.toggleTimeLog}>
          <p style={editStyle}>edit</p>
          <p style={totalTimeStyle}>Total Time: </p>
          <TimeDisplay time={0} />
        </div>
      </div>
    )
  }
}

export default TimerControl;
