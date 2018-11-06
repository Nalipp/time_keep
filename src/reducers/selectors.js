export const getAllCategories = (state) => { 
  return Object.keys(state).map(key => state[key]);
}


