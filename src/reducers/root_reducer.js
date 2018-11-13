import { combineReducers } from 'redux';
import categoriesReducer from 'reducers/categories_reducer';
import topicsReducer from 'reducers/topics_reducer';
import timesReducer from 'reducers/times_reducer';

const rootReducer = combineReducers({ 
  categories : categoriesReducer,
  topics : topicsReducer,
  times : timesReducer,
})

export default rootReducer;




