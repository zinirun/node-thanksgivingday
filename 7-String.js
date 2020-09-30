'use strict';

let string = 'node.js study';

let isStartWith = string.startsWith('n');

let isIncludes = string.includes('study');

let isEndWith = string.endsWith('y');

const checkIfContains = () => {
  if (isStartWith && isIncludes && isEndWith) {
    return true;
  }
};

const ret = checkIfContains();
console.log(ret);
