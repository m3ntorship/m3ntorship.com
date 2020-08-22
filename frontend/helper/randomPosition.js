//Generating random number between and including min and max
const rng = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Generating random position
export default function randomPosition(
  maxX,
  maxY,
  radius,
  cache = [],
  margin = 0
) {
  let position = {
    x: rng(radius, maxX - radius),
    y: rng(radius, maxY - radius)
  };
  if (cache.length > 0) {
    for (let i = 0; i < cache.length; i++) {
      let distance = Math.hypot(
        position.x - cache[i].x,
        position.y - cache[i].y
      );
      if (distance < 2 * radius + margin) {
        position = {
          x: rng(radius, maxX - radius),
          y: rng(radius, maxY - radius)
        };
        i = -1;
      }
    }
  }
  cache.push(position);
  return { x: position.x - radius, y: position.y - radius };
}
