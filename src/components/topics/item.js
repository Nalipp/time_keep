import React from 'react';
import ItemDisplay from './item_display';
import FormInput from './form_input';
import Detail from './detail';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: props.topic.title === '',
      displayDetail: false,
      
    }
    this.toggleDisplayForm = this.toggleDisplayForm.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
  }
  toggleDisplayForm() {
    this.setState({displayForm: !this.state.displayForm});
  }
  toggleDetail() {
    this.setState({displayDetail: !this.state.displayDetail});
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
        {!this.state.displayDetail && !this.state.displayForm &&
          <ItemDisplay 
            topic={this.props.topic}
            toggleDetail={this.toggleDetail}
            toggleDisplayForm={this.toggleDisplayForm} />} 

        {this.state.displayForm &&
          <FormInput 
            toggleDisplayForm={this.toggleDisplayForm}
            topic={this.props.topic} />}

        {this.state.displayDetail &&
          <Detail 
            toggleDetail={this.toggleDetail}
            topic={this.props.topic} />}
      </div>
    )
  }
}


export default Item;
