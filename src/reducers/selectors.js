export const getAllCategories = ({ categories }) => { 
  return Object.keys(categories).map(key => categories[key]);
}

