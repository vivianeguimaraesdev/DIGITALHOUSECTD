const Aluno = require("./aluno");

const curso = {
    nomeCurso: "Vivianne Cursos",
    notaDeAprovacao: 7,
    faltasMaximas: 3,
    listadeEstudantes: [],
   
    adicionarAluno: function(...nomeDoAluno) {
        this.listadeEstudantes.push(...nomeDoAluno)
    },
    aprovarAluno: function(aluno){
        let media = aluno.calcularMedia()
        if( aluno.faltas < this.faltasMaximas && media >= this.notaDeAprovacao){
            return true
        }
        else if(aluno.faltas == this.faltasMaximas && media >= this.notaDeAprovacao*1.1){
            return true
        }
        else{
            return false
        }
    },
    listarAprovados: function(){
        let listaAprovados = [];
        this.listadeEstudantes.map(elemento => listaAprovados.push(this.aprovarAluno(elemento)))
            return listaAprovados
    }
}

module.exports = curso;