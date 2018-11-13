import React from 'react';
import ItemDisplay from 'components/categories/item_display';
import FormInput from 'components/categories/form_input';
import NewTopic from 'components/topics/new_topic';
import TopicsList from 'components/topics/list';

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
      border: '.12em solid lightgrey',
    }
    return (
      <div>
        <div style={itemContainerStyle}>
          {this.state.displayForm
          ?
            <FormInput 
              toggleDisplayForm={this.toggleDisplayForm}
              category={this.props.category} />
          :
            <ItemDisplay 
              category={this.props.category}
              toggleDisplayForm={this.toggleDisplayForm} />} 

        </div>
        <NewTopic category={this.props.category} />
        <TopicsList category={this.props.category} />
      </div>
    )
  }
}


export default Item;
