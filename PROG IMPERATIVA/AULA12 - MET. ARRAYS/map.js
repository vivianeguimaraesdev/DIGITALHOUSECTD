//Aula 12 - Metodos de Arrays Avançados 
//06/07/2021
//O map() é um método que cria uma nova matriz com os resultados
//da chamada de uma função para cada elemento da matriz.

let letrasMinusculas = ['a','b','c','d'];

//Função Clássica
/* let letrasMaiusculas = letrasMinusculas.map(
    function maiuscula(elemento) {
        return elemento.toUpperCase();
    }
); */

//Com Arrow Function

let letrasMaiusculas = letrasMinusculas.map(maiuscula=elemento =>elemento.toUpperCase());

console.log(letrasMinusculas);
console.log(letrasMaiusculas);
