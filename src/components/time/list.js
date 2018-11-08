import React from 'react';
import Item from './item';

const List = ({ topic, times }) => {
  return (
    <ul>
      {times.map(time => (
        <li key={time.id}>
          <Item time={time} />
        </li>
      ))}
    </ul>
  )
}

export default List;
