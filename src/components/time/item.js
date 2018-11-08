import React from 'react';
import ItemDisplayContainer from './item_display_container';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
    }
    this.toggleForm = this.toggleForm.bind(this);
  }
  toggleForm() {
    this.setState({displayForm: !this.state.displayForm});
  }
  render() {
    return (
      <div>
        {this.state.displayForm
          ?
            <p>form</p>
          :
            <ItemDisplayContainer
              toggleForm={this.toggleForm}
              time={this.props.time} />}
      </div>
    )
  }
}

export default Item;
