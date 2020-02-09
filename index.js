const ogArr = [1, 2, 3, 4, 5, 6];

number = process.argv[2]

const adjArr = (arr, number) => {
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

  const theGoodGood = Object.values(arrObj);

  console.log("Re-arranged array: ", theGoodGood);
};
