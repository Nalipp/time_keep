import React from 'react';
import Item from './item';

const List = ({ topics }) => {
  return (
    <ul>
      {topics.map(topic => (
        <li key={topic.id}>
          <Item topic={topic} />
        </li>
      )).reverse()}
    </ul>
  )
}

export default List;

