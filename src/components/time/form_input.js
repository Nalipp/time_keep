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
    if (this.state.value) {
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
      border: '.15em solid darkgrey',
      padding: '.3em',
      fontSize: '1em', 
      margin: '.3em 0 .3em .1em',
    }
    const buttonStyle = {
      borderRadius: '.4em',
      background: 'none',
      border: '.12em solid darkgrey',
      margin: '0 0 0 .4em',
      padding: '.2em .4em',
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            style={inputStyle}
            value={this.state.value}
            onChange={this.handleChange}/>

            <button style={buttonStyle}>submit</button>
        </form>
      </div>
    )
  }
}

export default FormInput;
