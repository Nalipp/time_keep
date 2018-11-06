import React from 'react';
import ItemDisplay from './item_display';
import FormInputContainer from './form_input_container';
import NewTopicContainer from '../topics/new_topic_container';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: props.category.name === '',
    }
    this.toggleDisplayForm = this.toggleDisplayForm.bind(this);
  }
  toggleDisplayForm() {
    this.setState({displayForm: !this.state.displayForm});
  }
  render() {
    const itemContainerStyle ={
      width: '20em',
      margin: '1em 0 0 1em',
      padding: '.4em',
      border: '.12em solid darkgrey',
    }
    return (
      <div>
      <div style={itemContainerStyle}>
          {this.state.displayForm
          ?
            <FormInputContainer 
              toggleDisplayForm={this.toggleDisplayForm}
              category={this.props.category} />
          :
            <ItemDisplay 
              category={this.props.category}
              toggleDisplayForm={this.toggleDisplayForm} />} 

      </div>
        <NewTopicContainer category={this.props.category} />
      </div>
    )
  }
}


export default Item;
