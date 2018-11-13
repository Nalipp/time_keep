import { RECEIVE_CATEGORY, REMOVE_CATEGORY } from 'actions/category_actions.js';

const defaultState = {
  1: {
    id: 1,
    name: 'category1',
  },
  2: {
    id: 2,
    name: 'category2',
  },
  3: {
    id: 3,
    name: 'category3',
  },
}

const categoriesReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CATEGORY:
      newState = Object.assign({}, state);
      newState[action.category.id] = action.category;
      return newState
    case REMOVE_CATEGORY:
      newState = Object.assign({}, state);
      delete newState[action.category.id];
      return newState
    default:
      return state;
  }
}

export default categoriesReducer;

