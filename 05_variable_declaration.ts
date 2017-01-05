// global scope
let a1: string = 'global 1';
var a2: string = 'global 2';
const a3: string = 'global 3';

console.log(a1);
console.log(a2);
console.log(a3);

// var declaration and scoping rule
// var is function scope
// hoisting effect moved var declaration to top of function
function isGolf (name: string) {
    if (name === 'Golf') {
        var result: boolean = true;
    }

    return result;
}

console.log(isGolf('Golf'));        // true
console.log(isGolf('nooHoly'));     // undefined

// let declaration and scoping rule
// the variable result was declared within if block, so another block cannot access it directly

function isHello (str: string) {
    if (str === 'Hello') {
        let result: boolean = true;
    }

    return result;  // compile ts will not passed, since let result is block scope
}

// const declaration and scoping rule
// the variable scope was declared within if block, since const result was de
function setName (str: string) {
    if (str === 'Marry') {
       const name: string = 'Jane';     
       name = str;
    }
}