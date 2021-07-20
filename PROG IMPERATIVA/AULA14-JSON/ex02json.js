// Data: 16/07/2021
// Aula 14 - JSON
// ex02Json.js

let frutas = '{"Fruta":"banana","Preço": 8.50,"Tipo":["Prata", "Maçã","Nanica"], "Origem":"Brasil"}';
// console.log(frutas);
// converter para JS 

let frutasConvertidasJS = JSON.parse(frutas);
// console.log(frutasConvertidasJS);
// console.log(frutasConvertidasJS.Origem);

// converter para JSON
let frutasConvertidasParaJSON = JSON.stringify(frutasConvertidasJS);
console.log(frutasConvertidasParaJSON);