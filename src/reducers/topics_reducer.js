import { RECEIVE_TOPIC, REMOVE_TOPIC } from '../actions/topic_actions.js';

const defaultState = {
  1: {
    id: 1,
    title: 'topic1',
    description: '',
    categoryId: 1,
  },
  2: {
    id: 2,
    title: 'topic2',
    description: '',
    categoryId: 1,
  },
  3: {
    id: 3,
    title: 'topic3',
    description: '',
    categoryId: 2,
  },
}

const TopicReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_TOPIC:
      newState = Object.assign({}, state);
      newState[action.topic.id] = action.topic;
      return newState
    case REMOVE_TOPIC:
      newState = Object.assign({}, state);
      delete newState[action.topic.id];
      return newState
    default:
      return state;
  }
}

export default TopicReducer;



