//Aula 09 - 21/06/2021
//Fora da pasta Modulos
//exImp05.js
const calculo = require('./modulos/exExpCalculos.js');
function calcular(a,b,operacao) {
    let resultado;

    if (operacao=='+') {
        resultado = calculo.somar(a,b);
    }
    else if (operacao=='-') {
        resultado = calculo.subtrair(a,b);
    }
    else if (operacao=='*') {
        resultado = calculo.multiplicar(a,b);
    }
    else operacao=='/'
        resultado = calculo.dividir(a,b);
    
    console.log(resultado);
}
calcular(2, 50,'+');
// calcular(2,50,'-');
// calcular(2,50,'*');
// calcular(2,0,'/');