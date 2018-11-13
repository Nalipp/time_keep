import React from 'react';
import ItemDisplay from './item_display';
import FormInput from './form_input';
import { connect } from 'react-redux';
import { getTimesByTopicId } from '../../reducers/selectors';

const List = ({ topic, times }) => {
  return (
    <ul>
      <FormInput
      topic={topic} />

      {times.map(time => (
        <li key={time.id}>
          <ItemDisplay 
            time={time} />
        </li>
      )).reverse()}
    </ul>
  )
}

const mapStateToProps = (state, { topic }) => ({
  times: getTimesByTopicId(state, topic),
});

export default connect(mapStateToProps, null)(List);
