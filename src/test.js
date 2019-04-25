import isSenior, { square, add } from "./utils.js";
import validator from "validator";

console.log("test.js");
console.log(square(10));
console.log("Add =", add(10, 20));

console.log(isSenior(65));
console.log(validator.isEmail("test@gmail.in"));
