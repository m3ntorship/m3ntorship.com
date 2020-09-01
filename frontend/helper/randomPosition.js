//Generating random number between and including min and max
const randomNumber = (min, max) => {
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
    x: randomNumber(radius, maxX - radius),
    y: randomNumber(radius, maxY - radius)
  };
  //a counter to counte how many times the loop has been looping
  let counter = 0;
  for (let i = 0; i < cache.length; i++) {
    //an if statment to limit how many times loop are gonna be made to stop infinite loop
    if (counter > 1000) {
      return { x: 0, y: 0 };
    }
    let distance = Math.hypot(position.x - cache[i].x, position.y - cache[i].y);
    if (distance < 2 * radius + margin) {
      position = {
        x: randomNumber(radius, maxX - radius),
        y: randomNumber(radius, maxY - radius)
      };
      counter++;
      i = -1;
    }
  }
  cache.push(position);
  return { x: position.x - radius, y: position.y - radius };
}
