'use strict';
function swap(arr, i1, i2) {
  let storedVal=arr[i1];
  arr[i1]=arr[i2];
  arr[i2]=storedVal;
  return;
}

let sample=[1,2,3,4,5];

console.log(sample);
console.log('swapping elements at positions 0 and 2');
swap(sample,2,0);
console.log(sample);
console.log('swapping elements at positions 1 and 4');
swap(sample,4,1);
console.log(sample);

function reverse(arr) {
  for (let i=0; i<(arr.length/2); i++) {
    swap(arr, i, (arr.length-i)-1);
  }
  return;
}

sample=[1,2,3,4,5,6,7,8,9,10,11];

console.log(sample);
reverse(sample);
console.log(sample);

sample=[10,9,8,7,6,5,4,3,2,1];

console.log(sample);
reverse(sample);
console.log(sample);
