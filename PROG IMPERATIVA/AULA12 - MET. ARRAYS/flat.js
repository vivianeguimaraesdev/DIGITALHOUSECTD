//Aula 12 - Metodos de Arrays Avançados 
//06/07/2021
//Flat = plano
/*Este método é feito para "desembrulhar" sub-arrays dentro de arrays
ou seja, ele não modifica o array original*/

let numeros = [1, 2, 3,[4, 5]];
console.log(numeros);
novoArray = numeros.flat(2);
console.log(novoArray);


