//Exercício 03
//ex02SetTime SetTimeOut
/* Para demonstrar o uso de promessas, usaremos exemplos de retorno de chamadas:
esperando por um tempo limite */

//host 
let dadosConexaoJson = '{"server":"192.168.0.1", "login":"admin", "senha":123}';
//console.log(dadosConexaoJson);

//Convertendo para JS 
let dadosConexaoJS = JSON.parse(dadosConexaoJson);
//console.log(dadosConexaoJS);
console.log(dadosConexaoJS.server);
console.log(dadosConexaoJS.login);
console.log(dadosConexaoJS.senha);

//Usuário

let txtServer = "192.168.0.1";
let txtLogin = "admin";
let txtSenha = 123;

let conexao = false;

if(dadosConexaoJS.server == txtServer &&  dadosConexaoJS.login == txtLogIN && dadosConexaoJS.senha == txtSenha){
    conexao = true;
} else {
    conexao = false;
};

// Criação da Promise
const promessa = new Promise((resolve, reject) => {
    console.log("Requisição em andamento...")
    // Criação de uma Delay de 3 segundos
    setTimeout(function () {
        // Verificamos se a promise dará erro ou não
        if (conexao == false){
            reject("ACESSO NEGADO - SERRVER NÃO CONECTADO")
    }
        else {
            resolve(JSON.stringify({
            vserver: "192.168.0.1",
            vlogin: "admin",
            vsenha: 123
        }

        ))}
    },3000)
})

promessa.then((resolve) => { // consumo/utlização do retorno da promise
    const dados = JSON.parse(resolve); // convertendo para JS
    console.log(dados);    
}).catch((reject) => {
    console.log(reject);
})
