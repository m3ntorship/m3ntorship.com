//Generating random number between and including min and max
const rng = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Checking if object is in array of objects
const isObjectInArray = (obj, arr) => {
  arr.forEach(element => {
    if (JSON.stringify(element) === JSON.stringify(obj)) {
      return true;
    }
  });
  return false;
};

//Generating random position
export default function randomPosition(numberOfPositions, cache, margin = 0) {
  let position = { x: rng(1, numberOfPositions), y: rng(1, numberOfPositions) };
  if (cache.length > (numberOfPositions + 2 * margin) ** 2) {
    return 0;
  }
  if (isObjectInArray(position, cache)) {
    return randomPosition(numberOfPositions, cache);
  } else {
    for (let i = -margin; i <= margin; i++) {
      for (let j = -margin; i <= margin; i++) {
        let pos = { x: position.x + i, y: position.y + j };
        if (!isObjectInArray(pos, cache)) {
          cache.push(pos);
        }
      }
    }
    return position;
  }
}
