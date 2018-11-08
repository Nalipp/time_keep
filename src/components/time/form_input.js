import React from 'react';

class FormInput extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value && !isNaN(Number(this.state.value))) {
      const timeStamp = new Date().getTime();
      const newTime = {
        id: timeStamp,
        topicId: this.props.topic.id,
        startTime: timeStamp,
        endtime: timeStamp,
        totalTime: this.state.value * 60000,
      }
      this.setState({value: ''});
      this.props.receiveTime(newTime)
    }
  }
  render() {
    const inputStyle = {
      borderRadius: '.4em',
      border: '.1em solid darkgrey',
      padding: '.25em',
      fontSize: '5.em', 
      width: '8em',
      margin: '.25em 0 .25em .5em',
    }
    const buttonStyle = {
      borderRadius: '.4em',
      background: 'none',
      border: '.1em solid darkgrey',
      margin: '0 0 0 .6em',
      fontSize: '.6em',
      padding: '.1em .3em',
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            style={inputStyle}
            value={this.state.value}
            placeholder="add minutes"
            onChange={this.handleChange}/>

            <button style={buttonStyle}>submit</button>
        </form>
      </div>
    )
  }
}

export default FormInput;

