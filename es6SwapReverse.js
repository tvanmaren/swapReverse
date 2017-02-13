'use strict';
function es6Swap(arr, i1, i2) {
  [arr[i1],arr[i2]]=[arr[i2],arr[i1]];
  return arr;
}

let sample=[1,2,3,4,5];

console.log(sample);
console.log('swapping elements at positions 0 and 2');
es6Swap(sample,2,0);
console.log(sample);
console.log('swapping elements at positions 1 and 4');
es6Swap(sample,4,1);
console.log(sample);

function es6Reverse(arr) {
  for (let i=0; i<(arr.length/2); i++) {
    es6Swap(arr, i, (arr.length-i)-1);
  }
  return;
}

sample=[1,2,3,4,5,6,7,8,9,10,11];

console.log(sample);
es6Reverse(sample);
console.log('reversed:',sample);

sample=[10,9,8,7,6,5,4,3,2,1];

console.log(sample);
es6Reverse(sample);
console.log('reversed:',sample);
