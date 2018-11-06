export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const removeCategory = category => ({
  action : REMOVE_CATEGORY,
  category,
});

export const receiveCategory = category => ({
  action : RECEIVE_CATEGORY,
  category,
});


