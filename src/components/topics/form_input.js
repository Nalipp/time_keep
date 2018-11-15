import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/topic_actions';

class FormInput extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      title: props.topic.title,
      description: props.topic.description,
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title) {
      this.props.toggleDisplayForm();
      const update = Object.assign({}, this.props.topic)
      update.title = this.state.title;
      update.description = this.state.description;
      this.props.receiveTopic(update)
    }
  }
  handleDelete() {
    this.props.removeTopic(this.props.topic);
  }
  render() {
    const toggleStyle = {
      width: '20%',
      cursor: 'pointer',
    }
    const inputStyle = {
      borderRadius: '.4em',
      border: '.1em solid darkgrey',
      padding: '.2em',
      fontSize: '.7em', 
      display: 'block',
      margin: '.2em 0 .2em .5em',
    }
    const buttonStyle = {
      borderRadius: '.4em',
      background: 'none',
      border: '.12em solid darkgrey',
      margin: '0 0 0 .4em',
      padding: '.2em .4em',
    }
    const deleteStyle = {
      position: 'absolute',
      fontSize: '.8em',
      right: '0',
      top: '0',
      cursor: 'pointer',
    }
    const labelStyle = {
      margin: '1em 0 .2em 1em',
      fontSize: '.6em',
    }

    return (
      <div>
        <div style={{position: 'relative'}}>
          {this.props.topic.title &&
            <p 
              className="toggle-topic-out"
              style={toggleStyle}
              onClick={this.props.toggleDisplayForm}>X</p>}
          <p style={deleteStyle} 
            className="delete-topic"
            onClick={this.handleDelete}>delete</p>
        </div>
        <form 
          className="topic-form"
          onSubmit={this.handleSubmit}>
          <label style={labelStyle}>Title</label>
          <input 
            className="topic-input"
            style={inputStyle}
            value={this.state.title}
            onChange={this.handleTitleChange}/>

          <label style={labelStyle}>Description</label>
          <textarea
            className="topic-textarea"
            style={inputStyle}
            value={this.state.description}
            onChange={this.handleDescriptionChange}>
          </textarea>

          <button style={buttonStyle}>submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, actions)(FormInput);

