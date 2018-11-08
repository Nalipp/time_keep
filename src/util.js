export const getTime = () => new Date().getTime();

export const getLastMondayInMilliseconds = (currentTime) => {
  let lastMonday;
  const remainderSinceThursday = (currentTime % 604800000); 

  if (remainderSinceThursday < 259200000) {
    lastMonday = (currentTime - remainderSinceThursday) - (86400000 * 3)
  } else {
    lastMonday = (currentTime - remainderSinceThursday) + (86400000 * 4)
  }
  return new Date(lastMonday);
}

