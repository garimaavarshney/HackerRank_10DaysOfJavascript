// ========================
//         Solution
// ========================

// Return a count of the total number of objects 'o' satisfying o.x == o.y.
// Parameter(s):
// objects: an array of objects with integer properties 'x' and 'y'

function getCount(objects) {
  var count = 0;

  for (let index = 0; index < objects.length; index++) {
    if (objects[index].x == objects[index].y) {
      count++;
    }
  }
  return count;
}

function main() {
  const n = +(readLine());
  let objects = [];

  for (let i = 0; i < n; i++) {
    const [a, b] = readLine().split(' ');

    objects.push({ x: +(a), y: +(b) });
  }

  console.log(getCount(objects));
}
