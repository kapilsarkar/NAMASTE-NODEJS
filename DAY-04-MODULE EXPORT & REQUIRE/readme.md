### MODULE.EXPORT & REQUIRE

### `MODULES` IN `NODE-JS` :

- `Modules` are the collection of java script code which is private to itself and it exists independently.

- `Node.js` modules are powerful tools for organizing, reusing, and sharing code.

- It is the `central` to `Node-JS` development.

- `Modules` can be easily reused across different parts of the application.

### ENTRY POINT :

- Whenever we have a `Node-JS` application there is one entry point in our application that entry point is `app.js`.

### ONE MODULE INTO ANOTHER :

- If there are code in other files along with `app.js` i.e there is another file named `new.js` and we want to execute code of that file along with `app.js`. Here `new.js` will be a separate module.

- To make two modules work together we need a `require` function.

- `app.js`

```
require("./new.js");

let a = "Kapil in app.js"

console.log(a)
```

- `new.js`

```
console.log("Hello Kapil welcome to new file")
```

- Output :

```
Hello Kapil welcome to new file

Kapil in app.js
```

- In the above example it gives the result of `new.js` then `app.js`.

### CALCULATING A FUNCTION FROM ONE FILE TO ANOTHER FILE :

-There is a file named `sum.js`.

- Code :

```
function calculateSum(a, b) {
   const sum = a + b;
   console.log(sum);
 }
```

- This code can be executed into our `app.js`.

- Whenever we create a separate module after that we write require in `app.js` then the code will run in the separate module but we cannot access the variables,methods and functions of one module into another simply by writing `require`.

- Modules protects their variables and functions from leaking, by default the modules are protected. So we cannot access the `calculateSum()` function simply by writing `require`.

- For that we have to `export` the function `calculateSum()` after that we have to import it into our `app.js`.

- Code in `sum.js` :

```
module.exports = {calculateSum};
```

- Code on `app.js` :

```
 const {calculateSum} = require("./sum.js");
 calculateSum(10, 20);

 Output:
 30
```

### FOR EXPORTING MULTIPLE FUNCTIONS/VARIABLES :

- We can do this by wrapping it inside an object.

- Code in `sum.js`

```
let x = "Hello Sum";
  function calculateSum(a, b) {
   const sum = a + b;
   console.log(sum);
 }
 module.exports = { x,calculateSum };
```

- Code in `app.js`

```
const {x, calculateSum} = require("./sum.js");
calculateSum(10, 20);
console.log(x);

Output :
30
Hello Sum
```

- So now we can export multiple things by wrapping it inside an object.

### CommonJS Module :

- The above pattern of require and export is known as CommonJS Module.

- CommonJS is a module system used in Node.js, allowing you to structure and share code. In CommonJS, each file is treated as a module.

- `Overview`:

- `require`: Used to import modules.

- `module.exports`: Used to export functions, objects, or variables from a module.

- There is another way of exporting module known as ES Module.

### ES Module :

- `ES Modules (ECMAScript Modules)` are a standardized module system in JavaScript, commonly used in both front-end and modern back-end development (including Node.js). They use import and export statements for defining and using modules.

- To use ES module we have to write in our `package.json` file :

```
{
  "type": "module"
}
```

- `Example :`

- In `sum.js:`

```
 export let x = "Hello Sum";
 export function calculateSum(a, b) {
  const sum = a + b;
   console.log(sum);
 }
```

- In `app.js:`

```
  import {calculateSum,x} from "./sum.js"

  calculateSum(100,200);
  console.log(x)
```

- Output:
```
300
Hello Sum
```

### Common-JS Module vs ES Module :

- `CommonJS` and `ES Modules` are two different module systems used in Java Script.

- `Common-JS :`

   - `Syntax`:

   -  Uses `require` to import modules.

   - Uses `module.exports` to export modules.

   -  By default used in Node-JS.

   - The Code is run in a `non-strict` mode.

   - Only supports `default exports`.

   - Modules are loaded synchronously.

   - Example :

```
// Exporting
const add = (a, b) => a + b;
module.exports = add;

// Importing
const add = require('./add');
console.log(add(2, 3));  // Outputs: 5

```

- `ES Modules:`

  - `Syntax` :

  - Uses `import` to bring in modules. 

  - Uses `export` to expose modules.

  - By default used in React, Angular.

  - The Code is run in a `strict` mode.

  - Supports named `exports` and `default exports`.

  - `Modules` are loaded asynchronously


  - `Example:`

```  
// Exporting

export const add = (a, b) => a + b;

// Importing

import { add } from './add.js';
console.log(add(2, 3));  // Outputs: 5
```

### module.exports :

- `module.exports` is crucial for defining what a `module` exposes to the outside world when it's imported using require. It allows you to `export` single or multiple values from a `module`.

```
console.log(module.exports)
Output :
{} //Empty Object
```


### NESTED MODULE :

- If there are multiple files in a single folder then using a folder as a module.

- In other words nested modules in `Node JS` allow for a well-organized, scalable, and maintainable project structure, especially in large applications

- Example :

- There is a folder named `calculate`. Inside that folder there are file named `index.js` and `multiply.js`.

- Common practice is to use `index.js` in a folder to aggregate and export functionalities. This allows importing the whole folder as a module.

- In `multiply.js :`

```
function calculateMultiply(a,b){
   const result = a * b;
   console.log(result)
}

module.exports = {calculateMultiply}
```

- In `index.js :`

```
const {calculateMultiply} = require("./multiply.js")

module.exports = {calculateMultiply}
```
- Just like multiply.js we can include multiple file and connect them to `index.js`

- In `app.js` :

```
const {calculateMultiply} = require("./calculate")

calculateMultiply(20,30)

Output :
600
```

### Importing data from json file :

- In `data.json` file.

```
{
    "name": "Kapil Sarkar",
    "city":"Asansol",
    "country":"India"
}
```

- In `app.js` file.

```
const data = require("./data.json");
console.log(data)

Output :
{ name: 'Kapil Sarkar', city: 'Asansol', country: 'India' }
```

### Core Modules in `Node-JS` :

- `Node-JS` comes with a set of built-in `"core modules"` that provide essential functionality for building applications without needing to install external packages.

- Example :

- `util`

- Provides utility functions, including debugging, formatting, and inheritance functions.

```
const util = require("node:util")
const debug = util.debug();
```

