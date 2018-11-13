import React from 'react';
import * as actions from 'actions/category_actions';
import { connect } from 'react-redux';

class FormInput extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      value: props.category.name,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value) {
      this.props.toggleDisplayForm();
      const update = Object.assign({}, this.props.category)
      update.name = this.state.value;
      this.props.receiveCategory(update)
    }
  }
  handleDelete() {
    this.props.removeCategory(this.props.category);
  }
  render() {
    const toggleStyle = {
      width: '20%',
      cursor: 'pointer',
    }
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
    const deleteStyle = {
      position: 'absolute',
      right: '0',
      top: '0',
      cursor: 'pointer',
    }
    return (
      <div>
        <div style={{position: 'relative'}}>
          {this.props.category.name &&
            <p style={toggleStyle}
              onClick={this.props.toggleDisplayForm}>X</p>}
          <p style={deleteStyle} 
            onClick={this.handleDelete}>delete</p>
        </div>
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

export default connect(null, actions)(FormInput);
