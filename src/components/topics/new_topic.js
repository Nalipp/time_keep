import React from 'react';

const NewTopic = ({ receiveTopic, category }) => {
  const buttonStyle = {
    background: 'lightgrey',
    borderRadius: '0 0 .4em .4em',
    fontSize: '1em',
    padding: '0 .7em',
    margin: '0 0 0 1em',
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
      onClick={handleNewTopic}>+</button>
  )
}

export default NewTopic;
