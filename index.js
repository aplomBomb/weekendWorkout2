const { performance } = require("perf_hooks");

const ogArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const adjArr = (arr, number) => {
  const start = performance.now();
  //Convert the array to an object
  //And do the arithmetic to each item's
  //index value
  const arrObj = arr.reduce((acc, current, index) => {
    let newIndex = index + 1 + number;
    //For positive arguments
    while (newIndex > arr.length) {
      newIndex = newIndex - arr.length;
    }
    //For negative arguments
    while (newIndex < 1) {
      newIndex = newIndex + arr.length;
    }
    return {
      ...acc,
      [newIndex]: current
    };
  }, {});

  const stop = performance.now();

  console.log(`Execution time: ${(stop - start).toFixed(4)} milliseconds`);

  return Object.values(arrObj);
};

console.log("1: ", adjArr(ogArr, 1));
console.log("-1: ", adjArr(ogArr, -1));
console.log("2: ", adjArr(ogArr, 2));
console.log("9: ", adjArr(ogArr, 9));
console.log("420: ", adjArr(ogArr, 420));
console.log("-69: ", adjArr(ogArr, -69));
