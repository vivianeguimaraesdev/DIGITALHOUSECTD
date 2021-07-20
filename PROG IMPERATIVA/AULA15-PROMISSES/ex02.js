//Aula 15 - Promises - 20/07/2021
//ex02SetTime SetTimeOut
/* Para demonstrar o uso de promessas, usaremos exemplos de retorno de chamadas:
esperando por um tempo limite */

console.log("Requisição em andamento...");
setTimeout(
    function(){
        funcaoConectar("Server Conectado - OK");
    }, 2000);

    function funcaoConectar(value){
        console.log(value);
    }