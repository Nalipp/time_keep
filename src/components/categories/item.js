import React from 'react';
import ItemDisplay from './item_display';
import FormInputContainer from './form_input_container';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
    }
    this.toggleDisplayForm = this.toggleDisplayForm.bind(this);
  }
  toggleDisplayForm() {
    this.setState({displayForm: !this.state.displayForm});
  }
  render() {
    return (
      <div>
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
    )
  }
}


export default Item;
