export const REMOVE_TOPIC = 'REMOVE_TOPIC';
export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';

export const removeTopic = topic => ({
  type : REMOVE_TOPIC,
  topic,
});

export const receiveTopic = topic => ({
  type : RECEIVE_TOPIC,
  topic,
});

