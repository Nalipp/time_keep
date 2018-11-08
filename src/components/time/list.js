import React from 'react';
import ItemDisplayContainer from './item_display_container';
import FormInputContainer from './form_input_container';

const List = ({ topic, times }) => {
  return (
    <ul>
      <FormInputContainer
      topic={topic} />

      {times.map(time => (
        <li key={time.id}>
          <ItemDisplayContainer 
            time={time} />
        </li>
      )).reverse()}
    </ul>
  )
}

export default List;
