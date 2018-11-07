import { combineReducers } from 'redux';
import categoriesReducer from './categories_reducer';
import topicsReducer from './topics_reducer';
import timesReducer from './times_reducer';

const rootReducer = combineReducers({ 
  categories : categoriesReducer,
  topics : topicsReducer,
  times : timesReducer,
})

export default rootReducer;




