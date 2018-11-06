export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const removeCategory = category => ({
  type : REMOVE_CATEGORY,
  category,
});

export const receiveCategory = category => ({
  type : RECEIVE_CATEGORY,
  category,
});


