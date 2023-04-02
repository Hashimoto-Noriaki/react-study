// async function を定義
const lateTrain = async (minitues) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, minitues);
  });
  // Promiseの結果が返ってくるまで実行されない
  console.log(`電車が${minitues}分遅れた`);
};

// let A = 0;

// init();
// async function init() {
//   try {
//     const result = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         a = 1;
//         reject(A);
//       }, 1000);
//     });
//     console.log(result);
//   } catch (e) {
//     console.log("catchが実行", e);
//   }
// }

// const h1Element = document.querySelector("h1");
// console.log(h1Element);
// console.log(h1Element.textContent);
// h1Element.textContent = "変更したタイトル";

// const btnEl = document.querySelector('button');
// POINT DOMとイベントリスナ
// const h1Element = document.querySelector('h1');
// console.dir(h1Element);
// console.log(h1Element.textContent);
// h1Element.textContent = '変更後のタイトル';

// const btnEl = document.querySelector('button');
// const helloFn = (e) => {
//   console.dir(e.target.textContent);
//   console.log('hello')
// };
// btnEl.addEventListener('click', helloFn)
