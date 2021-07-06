  
//importando funções do ex3.js
// ficheiro ex3.js

// sintaxe CommonJS
const A = require('./modulos/ex3.js');
const foo = A.foo;
const baz = A.baz;

console.log(foo());
// // sintaxe ES6
// import * as A from './ex3.js';
// const foo = A.foo;
// const baz = A.baz;

// // ou somente
// import {foo, baz} from './ex3.js';