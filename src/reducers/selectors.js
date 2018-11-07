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

export const getTimesByTopicId = ({ times }, topic) => {
  const results = [];
  for (let key in times) {
    times[key].topicId === topic.id && results.push(times[key]);
  }
  return results;
}

export const getTimeTotalByTopicId = (state, topic) => {
  const times = getTimesByTopicId(state, topic);
  return times.reduce((a, time) => a + time.totalTime, 0);
}
