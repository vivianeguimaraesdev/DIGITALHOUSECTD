//Aula 12 - Metodos de Arrays Avançados 
//06/07/2021
//Reduce é um método que percorre a array e retorna um único valor
//Ele acumula o resultado.

const numeros = [1, 2, -3, 4, -5, 0, 7, 8, 9, 19];
let resultado = numeros.reduce(
    function (totalizador,elemento){
        return totalizador+elemento;
    }
);

console.log(resultado);
