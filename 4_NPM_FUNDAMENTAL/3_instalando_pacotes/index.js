const _ = require('lodash');

// const a = [1, 2, 3, 4, 5];
// const b = [2, 4, 6, 7, 8];
const arrays = [
  [1, 2, 3, 4, 5],
  [2, 4, 6, 7, 8],
];

const diff = _.difference(arrays[0], arrays[1]);
console.log(diff);
