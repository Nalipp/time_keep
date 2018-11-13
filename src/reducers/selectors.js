import { getLastMondayInMilliseconds, getTime } from '../util';

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

export const getTimeTotalByCategoryId = (state, {category}) => {
  const topics = getTopicsByCategoryId(state, category)
  let total = 0;
  topics.forEach(topic => {
    total += getTimeTotalByTopicId(state, topic);
  });
  return total;
}

export const getTimeTotal = ({ times }) => {
  const timesArr = [];
  Object.keys(times).forEach(time => timesArr.push(times[time]));
  return timesArr.reduce((sum, time) => sum + time.totalTime, 0)
}

export const getTimeTotalByWeek = ({ times }) => {
  const lastMonday = getLastMondayInMilliseconds(getTime());
  let total = 0;
  for (let key in times) {
    let time = times[key];
    if (time.startTime > lastMonday) {
      total += time.totalTime;
    }
  }
  return total;
}
