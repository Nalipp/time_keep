import categoriesReducer from 'reducers/categories_reducer'
import { RECEIVE_CATEGORY, REMOVE_CATEGORY } from 'actions/category_actions';

it('handles actions of RECEIVE_CATEGORY type', () => {
  const action = {
    type: RECEIVE_CATEGORY, 
    category: {
      id: 1,
      name: 'category1',
    },
  };
  const newState = categoriesReducer({}, action);
  expect(newState).toEqual({"1": {"id": 1, "name": "category1"}});
});

it('handles actions of REMOVE_CATEGORY type', () => {
  const action = {
    type: REMOVE_CATEGORY, 
    category: {
      id: 1,
      name: 'category1',
    },
  }
  const defaultState = {"1": {"id": 1, "name": "category1"}}
  const newState = categoriesReducer(defaultState, action);
  expect(newState).toEqual({});
});

it('handles actions of unknown category type', () => {
  const newState = categoriesReducer({}, {});
  expect(newState).toEqual({});
});

