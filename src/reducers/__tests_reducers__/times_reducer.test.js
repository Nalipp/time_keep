import timesReducer from 'reducers/times_reducer'
import { RECEIVE_TIME } from 'actions/time_actions';

it('handles actions of RECEIVE_TIME type', () => {
  const action = {
    type: RECEIVE_TIME,
    time: {
      id: 1,
      topicId: 1,
      startTime: 1541119862156, 
      endtime: 1541119878364, 
      totalTime: 16208,
    },
  }

  const newState = timesReducer({}, action);
  expect(newState).toEqual({"1": 
    {"endtime": 1541119878364, 
     "id": 1, 
     "startTime": 1541119862156, 
     "topicId": 1, 
     "totalTime": 16208}
  });
});

it('handles actions of unknow topic type', () => {
  const newState = timesReducer({}, {});
  expect(newState).toEqual({});
});



