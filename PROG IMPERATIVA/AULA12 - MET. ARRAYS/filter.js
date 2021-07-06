//Aula 12 - Metodos de Arrays Avançados 
//06/07/2021
// O método filter() cria um novo array com todos os elementos 
//que passaram no teste implementado pela função fornecida. 
//Ele retorna um novo array com os elementos que atendem uma condição lógica.

const numeros = [1, 2, -3, 4, -5, 0, 7, 8, 9, 19];

const NumerosMaiores = numeros.filter(elemento => elemento > 0);

console.log(NumerosMaiores);