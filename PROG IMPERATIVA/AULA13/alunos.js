//PARTE 01
/* Crie um objeto aluno que tenha como atributos: nome (string),
 quantidade de faltas (number) e notas (array de númer
Crie um construtor para ele e importe-o como o módulo aluno. */

const alunos = 
    {
        nome: 'Lamark',
        falta: 5,
        notas: [9, 5, 10, 8, 3],
        media: function(){
            let soma = this.notas.reduce(function(acumulador, elemento){
                return acumulador + elemento 
            })
            return soma / this.notas.length
        },
        faltas: function(){
            this.falta++
        }
}
//Função Construtora
function aluno(nome, falta, notas){
    this.nome = nome;
    this.falta = falta;
    this.notas = notas;
    this.media = function(){
        let soma = this.notas.reduce(function(acumulador, elemento){
            return acumulador + elemento 
        })
        return soma / this.notas.length
    };
    this.faltas = function(){
        this.falta++
    };
}

aluno('Renata', 1, [2, 6, 9, 9, 9])
aluno('Rafaela', 1,[5, 5, 7, 9, 9])
aluno('Vivianne', 0,[9, 10, 10, 9, 9])
aluno('Leshly',2,[10, 10, 10, 10, 10])

module.exports = aluno;

//PARTE 02
/* Nosso objeto aluno terá o método calcularMedia que 
retorna a média de suas notas. Também terá um método chamado faltas, 
que simplesmente aumenta o número de faltas em 1.*/

//Testando as funções media e faltas 
console.log(alunos.media());
alunos.faltas(); //Adiconando faltas + 1
console.log(alunos.falta);

//PARTE 04 
/* Crie o método que permite adicionar alunos à lista do curso, ou seja,
 quando chamamos nosso método em nosso objeto curso, deverá adicionar 
um aluno a mais na propriedade lista de estudantes do objeto curso. */

//PARTE 05

/* 
a)Crie um método para o objeto curso que receba um aluno 
(como parâmetro) e retorne true se ele aprovou no curso ou 
false em caso de reprovação. 
b) Para ser aprovado, o aluno tem que ter 
uma média igual ou acima da nota de aprovação  e ter menos faltas que 
faltas máximas. 
c) Se tiver a mesma quantidade, tem que estar 10% acima da nota 
de aprovação. */


//PARTE 06 
/* Crie um método para o objeto curso que percorra a lista de estudantes 
e retorne um array de booleanos com os
 resultados se os alunos aprovaram ou não. */

 //PARTE 07
/* 
a) Importe o módulo estudantes.js, que contém uma lista de alunos, 
 dentro do arquivo que contém o objeto curso.
b) Substitua o conteúdo da propriedade lista de estudantes,
pela lista de estudantes do arquivo estudantes.js e 
garanta que sigam funcionando todos os métodos corretamente. 
c) (revisar que o arquivo tenha todos os métodos corretamente). */


