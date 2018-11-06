export const REMOVE_TOPIC = 'REMOVE_TOPIC';
export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';

export const removeTopic = topic => ({
  action : REMOVE_TOPIC,
  topic,
});

export const receiveCategory = topic => ({
  action : RECEIVE_TOPIC,
  topic,
});

