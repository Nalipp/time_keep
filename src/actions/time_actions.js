export const RECEIVE_TIME = 'RECEIVE_TIME';
export const REMOVE_TIME = 'REMOVE_TIME';

export const receiveTime = time => ({
  type : RECEIVE_TIME,
  time,
});

export const removeTime = time => ({
  type : REMOVE_TIME,
  time,
});


