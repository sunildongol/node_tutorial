const _ = require('lodash');

const arra= [1, 2, [3,[4,[6]]]]

console.log(_.flattenDeep(arra))