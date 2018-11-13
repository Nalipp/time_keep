import { RECEIVE_TIME, REMOVE_TIME } from 'actions/time_actions.js';

const defaultState = {
  1: {
    id: 1,
    topicId: 1,
    startTime: 1541119862156, 
    endtime: 1541119878364, 
    totalTime: 16208,
  },
  2: {
    id: 2,
    topicId: 2,
    startTime: 1541119862156, 
    endtime: 1541119878364, 
    totalTime: 16208,
  },
  3: {
    id: 3,
    topicId: 2,
    startTime: 1541119862156, 
    endtime: 1541119878364, 
    totalTime: 16208,
  },
  4: {
    id: 4,
    topicId: 3,
    startTime: 1541119862156, 
    endtime: 1541119878364, 
    totalTime: 16208,
  },
  5: {
    id: 5,
    topicId: 3,
    startTime: 1540515062156, 
    endtime: 1540515078364, 
    totalTime: 16208,
  }
}

const TimeReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_TIME:
      newState = Object.assign({}, state);
      newState[action.time.id] = action.time;
      return newState
    case REMOVE_TIME:
      newState = Object.assign({}, state);
      delete newState[action.time.id];
      return newState
    default:
      return state;
  }
}

export default TimeReducer;



