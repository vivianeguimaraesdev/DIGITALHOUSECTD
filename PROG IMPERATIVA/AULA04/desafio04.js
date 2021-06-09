/* Em um parque de diversões nos pedem um programa para verificar se os
passageiros da montanha-russa podem entrar no brinquedo.
1) Crie uma função podeSubir() que receba dois parâmetros:
- altura da pessoa;
- se está acompanhada.
Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode
subir ou não, baseado nas seguintes condições:
a) A pessoa deve medir mais de 1.40m e menos de 2 metros.
b) Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
c) Se a pessoa medir menos de 1.20m, não poderá subir, nem
acompanhada */ 

let altura = 1.2;
let acompanhado = true;
​
function podeSubir(altura,acompanhado) {
    if (altura >=1.4 && altura <=2) {
        return "Acesso permitido"
    } else if (altura >=1.20 && acompanhado == true) {
        return "Acesso permitido com responsável"
    } else {
        return "Acesso negado"
    }
    
}
​
console.log (podeSubir(altura,acompanhado));