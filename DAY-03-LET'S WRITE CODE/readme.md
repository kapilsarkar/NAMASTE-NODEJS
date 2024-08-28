### LET'S WRITE CODE :

### FOR RUNNING NODE-JS APPLICATION WE REQUIRE 

-  We need to have `Node-JS` installed on our system. `Node-JS` includes the `Node-JS` runtime and `npm`.

### NODE-`REPL` :

- `REPL(READ EVALUATE PRINT LOOP) ` 

- The Node `REPL` is a powerful tool for Node.js developers, providing a quick and interactive way to experiment with code.

- If we write on our terminal `node`

- Output:

```
Welcome to Node.js v18.12.1.
```
-  Basically it enters into a program , a kind of C++ like program or it's a kind of Node REPL.

- Over here in piece of Node-JS code will work.

- Example :
```
 2+3
 Output :
 5

let i = 20
let j = 30
i + j
Output :
50

console.log("Kapil")
Output:
Kapil
```

- We are running java script code on the `Node runtime` environment.

- So `Node-JS` is a Java Script run time environment.

### EXECUTION OF THE CODE :

- Whenever we write any piece of Java Script code `Node-JS` passes the code to the V8 engine then V8 engine executes the code.

- This whole process is known as Node REPL.

- The code which we are running on the terminal is very similar to running the code on the `browser console`.

- For running java script code on VS CODE Terminal write :
```
node app.js
```
- Here `app.js` is the name of the file.

### GLOBAL OBJECT :

- `window` is the global object given by the browser.

- On the browser console `this` also refers to the `window` object.

- In the VS CODE  if we write :

```
console.log(global)
Output :

<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 54.420299999881536,
      nodeStart: 3.643099999986589,
      v8Start: 8.012600000016391,
      bootstrapComplete: 40.96389999985695,
      environment: 26.332500000018626,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1724845640522.583
  },
  fetch: [AsyncFunction: fetch]
}
```

- `global` is not a part of our V8 engine.It is one of the superpower which is given to us by `Node-JS`.

- `global` object gives us access to many features example : `setTimeout` ,`setInterval` and many others.

- In VS Code if we write 
```
console.log(this)
Output:
{} //It represents an empty object
```
- In browser console if we type `this` it points us to the `window` object.

### `globalThis` :

- `globalThis` is referring to global this across all java script runtime.

- In VS Code if we write 
```
console.log(globalThis)
Output :
similar to console.log(global)
```

- In other words `globalThis` and this represent same `this`. So if we write :

```
console.log(globalThis === global)
Output :
true
```
