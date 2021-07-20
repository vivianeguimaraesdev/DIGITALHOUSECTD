// objeto literal Aluno

// let pedro = {
//     nome: "Pedro",
//     faltas: 2,
//     notas: [10,6,8,10]
// }

// console.log(pedro)

// OBS: NÃO É POSSÍVEL USAR ARROW FUNCTION PARA FAZER FUNÇÃO CONSTRUTORA
// OBS: MAS PODE USAR PARA FAZER OS MÉTODOS

const Aluno = function(nome,faltas,notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = () => this.notas.reduce((juntandoNotas, elemento) => juntandoNotas + elemento) / this.notas.length
    this.adicionarFalta = () => this.faltas++;
}

// Diponibilizando a função para exportar
module.exports = Aluno;



