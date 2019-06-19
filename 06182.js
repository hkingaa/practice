/* const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

let arr = generate2d();

const fill2dArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.floor(Math.random() * 10 + 1);
    }
  }
  return arr;
}; */

let arr1 = [5, 3, 2, 1];
let arr2 = [6, 8, 9, 10];

const smallestDifference = (arr1, arr2) => {
  let min = Math.abs(arr1[0] - arr2[0]);
  let tomb = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) < min) {
        min = Math.abs(arr1[i] - arr2[j]);
        tomb = [arr1[i], arr2[j]];
      }
    }
  }
  return tomb;
};

console.log(smallestDifference(arr1, arr2));
