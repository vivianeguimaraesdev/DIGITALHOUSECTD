//  Importação puxando a função construtora

let Aluno = require("./aluno");

// Importação do arquivo curso
let curso = require("./curso");

let victor = new Aluno("Victor", 1, [9, 10, 8, 7]);
let alana = new Aluno("Alana", 2, [10, 10, 8, 9]);
let lucas = new Aluno("Lucas", 4, [6, 5, 5, 6]);
let maria = new Aluno("Maria", 3, [7,5,8,6]);


curso.adicionarAluno(joao, fernanda, cleber,lirio)
console.log(curso.listadeEstudantes)

console.log(curso)

//Testando
console.log(curso.aprovarAluno(Victor));
console.log(curso.aprovarAluno(Alana));
console.log(curso.aprovarAluno(Lucas));
console.log(curso.aprovarAluno(Maria));

console.log(curso.listarAprovados());

