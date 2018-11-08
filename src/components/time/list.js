import React from 'react';
import Item from './item';
import FormInputContainer from './form_input_container';

const List = ({ topic, times }) => {
  return (
    <ul>
      <FormInputContainer
      topic={topic} />

      {times.map(time => (
        <li key={time.id}>
          <Item 
            topic={topic}
            time={time} />
        </li>
      ))}
    </ul>
  )
}

export default List;
