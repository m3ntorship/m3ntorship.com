//randomPosition
function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function randomPosition(numberOfPositions, cache) {
  let randomNumber = rng(1, numberOfPositions);
  if (cache.length === numberOfPositions) {
    return 0;
  }
  if (cache.includes(randomNumber)) {
    return randomPosition(numberOfPositions, cache);
  } else {
    cache.push(randomNumber);
    return randomNumber;
  }
}
