// POINT 配列のmap、filterメソッドの使い方
const array = [10, 20, 30, 40];
const newArray = [];

for (let i = 0; i < array.length; i++) {
  const val = array[i] * 2;
  if (val > 50) {
    newArray.push(array[i] * 5);
  }
}

console.log(newArray);

//const newArray2 = array.map((val) => val * 2);
const newArray2 = array.map((val, i) => {
  return val * 3;
});
const newArray3 = newArray2.filter((val) => val > 50);
console.log(newArray2);
// const arry = [10, 20, 30, 40];
// const newArry = [];

// for(let i = 0; i < arry.length; i++) {
//   const val = arry[i] * 2;
//   if(val > 50) {
//     newArry.push(arry[i] * 2)
//   }
// }

// console.log(newArry);

// const newArry2 = arry.map(val => val * 2).filter(val => val > 50);
// console.log(newArry2)
