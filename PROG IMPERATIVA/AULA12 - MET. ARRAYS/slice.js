//Aula 12 - Metodos de Arrays Avançados 
//06/07/2021
//Slice = fatiar
/* O metodo array.slice(), Ele retorna os elementos selecionados da matriz,
array.slice(inicio, fim) */

const frutas = ['Banana','Laranja','Limão','Maçã','Manga'];
const citricas = frutas.slice(1,3); // representam o intervalo começa no x e finaliza no x
console.log(citricas); //Laranja e Limão