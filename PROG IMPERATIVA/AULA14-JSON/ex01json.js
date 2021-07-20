// Troca de dados - formulário para servidor.
// Criação e consumo - utilizando api's.
// Persistêncai de dados em navegadores e servidores.
// Formato de dados - padrão da web atualmente
// Json - não suporta comentários

let dadosJson = '{"nome": "Luis", "sobrenome": "Goncalves", "idade": 21}';
// console.log(dadosJson);
// JSON é um objeto nativo
// dessearialização 
let dadosConvertidosJS = JSON.parse(dadosJson); // objeto literal
// console.log(dadosConvertidosJS);
// console.log(dadosConvertidosJS.sobrenome)
// console.log(dadosConvertidosJS.sobrenome.toUpperCase());

//serialização cria um formato JSON
let objetoConvertidoJson = JSON.stringify(dadosConvertidosJS);
console.log(objetoConvertidoJson);