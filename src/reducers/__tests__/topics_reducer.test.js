import topicsReducer from 'reducers/topics_reducer'
import { RECEIVE_TOPIC, REMOVE_TOPIC } from 'actions/topic_actions';

it('handles actions of RECEIVE_TOPIC type', () => {
  const action = {
    type: RECEIVE_TOPIC,
    topic: {
      id: 1,
      title: 'topic1',
      description: '',
      categoryId: 1,
    },
  }
  const newState = topicsReducer({}, action);
  expect(newState).toEqual({"1": 
    {"categoryId": 1, "description": "", "id": 1, "title": "topic1"}
  });
});

it('handles actions of REMOVE_TOPIC type', () => {
  const action = {
    type: REMOVE_TOPIC,
    topic: {
      id: 1,
      title: 'topic1',
      description: '',
      categoryId: 1,
    },
  }
  const defaultState = {"1": 
    {"categoryId": 1, "description": "", "id": 1, "title": "topic1"}
  };
  const newState = topicsReducer(defaultState, action);
  expect(newState).toEqual({});
});


it('handles actions of unknow topic type', () => {
  const newState = topicsReducer({}, {});
  expect(newState).toEqual({});
});


