import React from 'react';
import Item from './item';
import { connect } from 'react-redux';
import { getTopicsByCategoryId } from '../../reducers/selectors';
import * as actions from '../../actions/topic_actions';

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

const mapStateToProps = (state, {category}) => ({
  topics: getTopicsByCategoryId(state, category),
});

export default connect(mapStateToProps, actions)(List);

