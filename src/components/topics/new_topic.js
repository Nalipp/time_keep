import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/topic_actions';

const NewTopic = ({ receiveTopic, category }) => {
  const buttonStyle = {
    background: 'lightgrey',
    borderRadius: '0 0 .4em .4em',
    fontSize: '.7em',
    padding: '.26em .7em',
    margin: '0 0 0 1.4em',
  }
  const handleNewTopic = () =>{
    const date = new Date();
    const topic = {
      id: date.getTime(), 
      title: '',
      categoryId: category.id,
    };
    receiveTopic(topic);
  }
  return (
    <button 
      style={buttonStyle}
      onClick={handleNewTopic}>+ topic</button>
  )
}

export default connect(null, actions)(NewTopic);
