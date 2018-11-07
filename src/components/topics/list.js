import React from 'react';
import Item from './item';

const List = ({ topics }) => {
  const containerStyle = {
    height: '100%',
    overflow: 'hidden',
    overflowY: 'scroll',
    minWidth: 0,
  }
  return (
    <div style={containerStyle}>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>
            <Item topic={topic} />
          </li>
        )).reverse()}
      </ul>
    </div>
  )
}

export default List;

