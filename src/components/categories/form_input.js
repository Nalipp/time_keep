import React from 'react';

class FormInput extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      value: props.category.name,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.toggleDisplayForm();
    const update = Object.assign({}, this.props.category)
    update.name = this.state.value;
    this.props.receiveCategory(update)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={this.state.value}
          onChange={this.handleChange}/>

          <button>submit</button>
      </form>
    )
  }
}

export default FormInput;
