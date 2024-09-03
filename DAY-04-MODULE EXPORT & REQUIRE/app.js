require("./new.js");

const obj = require("./sum.js");
const {y, calculateTripleSum} = require("./sum.js")
let a = "Kapil";
console.log(a);

obj.calculateSum(10, 20);
console.log(obj.x)

calculateTripleSum(10,20,30)
console.log(y)

// For ES-MODULES-
//  import {calculateSum,x} from "./sum.js"


//  calculateSum(100,200)
//  console.log(x)