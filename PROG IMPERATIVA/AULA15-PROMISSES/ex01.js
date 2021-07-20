//Aula de Promises - 20/07/2021
/* São promessas.
Um objeto em javascript que vincula a produção do código.
O consumo do código. */

function meuVerificador(resposta){
    console.log(resposta);
}

let minhaPromessa = new Promise(
    function(Resolve, Reject){
        let x = 0;
        if(x == 0){
            Resolve("Tudo ok!");
        } else {
            Reject("Deu erro!");
        }
    }
);

minhaPromessa.then(
    function(Resolve){
        meuVerificador(Resolve);
    }).catch((Reject) => {
        console.log(Reject)
    });
