import React from 'react';
import ItemDisplayContainer from './item_display_container';

const Item = ({ time }) => (
  <div>
    <ItemDisplayContainer time={time} />
  </div>
)

export default Item;
