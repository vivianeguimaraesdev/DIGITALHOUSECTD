// Aqui fiz a importação do arquivo aluno puxando a função construtora
// Lembra-se de usar ASPAS para passar a informação dentro do require
let Aluno = require("./aluno");

// Fiz a importação do arquivo curso
let curso = require("./curso");

let joao = new Aluno("João", 1, [9, 10, 8, 7]);
let fernanda = new Aluno("Fernanda", 2, [10, 10, 8, 9]);
let cleber = new Aluno("Cleber", 4, [6, 5, 5, 6]);
let lirio = new Aluno("Lirio", 3, [7,5,8,6]);

// console.log(joao);
// console.log(fernanda);
// console.log(cleber);
// console.log(lirio);

// console.log(joao.calcularMedia());
// console.log(fernanda.calcularMedia());
// console.log(cleber.calcularMedia());
// console.log(lirio.calcularMedia());

// console.log(joao.faltas);
// console.log(fernanda.faltas);
// console.log(cleber.faltas);
// console.log(lirio.faltas);

// joao.adicionarFalta();
// fernanda.adicionarFalta();
// cleber.adicionarFalta();
// lirio.adicionarFalta();

// console.log(joao.faltas);
// console.log(fernanda.faltas);
// console.log(cleber.faltas);
// console.log(lirio.faltas);

curso.adicionarAluno(joao, fernanda, cleber,lirio)
console.log(curso.listadeEstudantes)

console.log(curso)

console.log(curso.aprovarAluno(joao));
console.log(curso.aprovarAluno(fernanda));
console.log(curso.aprovarAluno(cleber));
console.log(curso.aprovarAluno(lirio));

console.log(curso.listarAprovados());

