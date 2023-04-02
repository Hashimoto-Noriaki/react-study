function print(fn) {
  //const result = callBack(4); //();は関数として実行
  const result = 4; //=4のイメージ
  console.log(result);
}

function fn(number = 3) {
  return number * 5;
}

debugger;
print(fn); //コールバック関数
