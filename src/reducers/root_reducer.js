import { combineReducers } from 'redux';
import categoriesReducer from './categories_reducer';
import topicsReducer from './topics_reducer';

const rootReducer = combineReducers({ 
  categories : categoriesReducer,
  topics : topicsReducer,
})

export default rootReducer;




