import React from 'react';

class TimerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      timeRunning: false,
    }
    this.toggleTimeRunning = this.toggleTimeRunning.bind(this);
  }
  toggleTimeRunning() {
    this.setState({timeRunning: !this.state.timeRunning});
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
    return (
      <div>
        {this.state.timeRunning 
          ?
          <button 
            style={{...buttonStyle, ...stopButtonStyle}}
            onClick={this.toggleTimeRunning}
            >stop</button>
          :
          <button 
            style={{...buttonStyle, ...startButtonStyle}}
            onClick={this.toggleTimeRunning}>start</button>}
      </div>
    )
  }
}

export default TimerControl;
