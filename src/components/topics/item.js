import React from 'react';
import ItemDisplay from './item_display';
import FormInputContainer from './form_input_container';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: props.topic.title === '',
    }
    this.toggleDisplayForm = this.toggleDisplayForm.bind(this);
  }
  toggleDisplayForm() {
    this.setState({displayForm: !this.state.displayForm});
  }
  render() {
    const itemContainerStyle ={
      margin: '1em auto',
      borderRadius: '.4em',
      padding: '.4em',
      width: '80%',
      border: '.08em solid darkgrey',
    }
    return (
      <div style={itemContainerStyle}>
          {this.state.displayForm
          ?
            <FormInputContainer 
              toggleDisplayForm={this.toggleDisplayForm}
              topic={this.props.topic} />
          :
            <ItemDisplay 
              topic={this.props.topic}
              toggleDisplayForm={this.toggleDisplayForm} />} 

      </div>
    )
  }
}


export default Item;
