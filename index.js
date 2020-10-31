/* eslint-disable func-style */
const sumItems = function(array) {
  let sumNum = 0;
  array.forEach((num) => {
    if (Array.isArray(num)) {
      sumNum += sumItems(num);
    } else {
      sumNum += num;
      //console.log(sumNum);
    }
  });
  return sumNum;
  
};

let arr = [1, [2, 3], 4, 5];

console.log(sumItems(arr));
module.exports = sumItems;



