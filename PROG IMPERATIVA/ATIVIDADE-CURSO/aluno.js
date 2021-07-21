// Objeto literal Aluno
// Arrow function não faz função construtora!


const Aluno = function(nome,faltas,notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = () => this.notas.reduce((juntandoNotas, elemento) => juntandoNotas + elemento) / this.notas.length
    this.adicionarFalta = () => this.faltas++;
}

// Export
module.exports = Aluno;



