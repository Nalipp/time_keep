export const getAllCategories = ({ categories }) => { 
  return Object.keys(categories).map(key => categories[key]);
}

export const getTopicsByCategoryId = ({ topics }, category) => {
  const results = [];
  for (let key in topics) {
    let topic = topics[key];
    if (topic.categoryId === category.id) {
      results.push(topic)
    }
  }
  return results;
}

