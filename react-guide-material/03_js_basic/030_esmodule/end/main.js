// POINT ESModuleの使い方
import baseBall, { hello, User } from "./module.js";
hello(); //hello実行
baseBall(); // baseBall実行
const user = new User("大谷選手");
user.hello();
