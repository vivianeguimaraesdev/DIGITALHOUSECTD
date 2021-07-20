const Aluno = require("./aluno");

const curso = {
    nomeCurso: "Luis Cursos",
    notaDeAprovacao: 7,
    faltasMaximas: 3,
    listadeEstudantes: [],
    // OBS: IMPORTAR, NÃO PODE USAR ARROW FUNCTION EM MÉTODO DE UM OBJETO LITERAL(NÃO DARIA PARA USAR ARROW FUNCTION NESTE CASO)
    // OBS: OS TRES PONTOS SE CHAMA PARAMETRO REST, E ELE SERVE PARA PASSAR O PARAMETRO DE QUE VAI SER ADICIONADO UM OU MAIS ELEMENTOS
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