/* Crie o método que permite adicionar alunos à lista do curso, ou seja,
 quando chamamos nosso método em nosso objeto curso, deverá adicionar 
um aluno a mais na propriedade lista de estudantes do objeto curso. */
let estudantes = require('./alunos')
const curso = {
    nomeCurso: "CTD",
    notaAprovacao: 7,
    faltasMax: 2,
    listaEstudantes: [],
    addAluno: function(alunos){
        this.listaEstudantes.push(alunos)
    },  
    aprovacao: function(alunos){
        if(alunos.media >= this.notaAprovacao && alunos.falta < this.faltasMax){
            return true
        } else if(alunos.falta ==  this.faltasMax && media > (this.notaAprovacao + this.notaAprovacao * 0.1)){
            return true
        } else{
            return false
        }
    },
    listaAprovacao:  function(){
        this.listaEstudantes.map(function(elemento){
            return elemento.aprovacao 
        })

    }
}