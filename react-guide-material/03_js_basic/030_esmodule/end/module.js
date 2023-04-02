export const hello = () => {
  console.log("がんばれ");
};

const baseBall = () => {
  console.log("二刀流");
};
export default baseBall;

// const funcB = () => {
//   console.log("funcB output");
// };

//export default funcB;

class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(this.name);
  }
}

export { User };
