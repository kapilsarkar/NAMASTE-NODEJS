require("./new.js");

const obj = require("./sum.js");
const {y, calculateTripleSum} = require("./sum.js")
let a = "Kapil in app.js";
console.log(a);

obj.calculateSum(10, 20);
console.log(obj.x)

calculateTripleSum(10,20,30)
console.log(y)

// For ES-MODULES-
//  import {calculateSum,x} from "./sum.js"


//  calculateSum(100,200)
//  console.log(x)

const {calculateMultiply} = require("./calculate")

calculateMultiply(20,30)

const data = require("./data.json");
console.log(data)
const util = require("node:util")



