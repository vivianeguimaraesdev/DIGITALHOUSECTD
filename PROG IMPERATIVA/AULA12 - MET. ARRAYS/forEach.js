//Aula 12 - Metodos de Arrays Avançados 
//06/07/2021
//forEach = para cada um elemento
//O forEach() é um método que chama uma função vez para cada elemento
//em um array.

//Exemplo 1
let cores = ['azul','amarelo','verde','branco'];

cores.forEach(
    function(elemento){
        console.log(elemento);
    }
    
) 

//Exemplo 2

let pizza = ['pedaço1', 'pedaço2','pedaço3','pedaço4'];

pizza.forEach(
    function(pedaco){
        console.log(pedaco);
    }
)