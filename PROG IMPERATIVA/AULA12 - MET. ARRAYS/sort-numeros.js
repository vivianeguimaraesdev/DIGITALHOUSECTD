//Aula 12 - Metodos de Arrays Avançados 
//06/07/2021
// Sort = ordenar
//array.sort() nos ajuda a ordenar os elementos de um array

const numeros = [50, 100, 10, 5, 25, 10];

//Ordem Crescente
console.log(numeros.sort(
    function(a,b){
        return a-b;
    }
));

//Ordem decrescente 
console.log(numeros.sort(
    function(a,b){
        return b-a;
    }
));