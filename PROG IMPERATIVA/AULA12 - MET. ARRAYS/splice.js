//Aula 12 - Metodos de Arrays Avançados 
//06/07/2021
//Splice -> emendar 
//array.splice(inicio, quantidade, item1, item2...);
//Quantidade é opcional 
//Ele server para retirar ou adicionar elementos em uma posição específica de um array

const frutas = ['Banana','Laranja','Limão','Maçã','Manga'];
console.log(frutas);

frutas.splice(2,0,"Mamão","Kiwi");

console.log("Lista com adição...:"+frutas);
