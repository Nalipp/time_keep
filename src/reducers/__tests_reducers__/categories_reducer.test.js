import categoriesReducer from 'reducers/categories_reducer'
import { RECEIVE_CATEGORY } from 'actions/category_actions';

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

it('handles actions of unknow category type', () => {
  const newState = categoriesReducer({}, {});
  expect(newState).toEqual({});
});

