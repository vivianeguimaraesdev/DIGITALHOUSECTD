//Resolução usando função e switch case!

function microondas(opcao,tempo){

    let tempoPadrao = 0;
    let prato = "";
    let mensagem;

    switch(opcao){
        case 1: prato = "Pipoca"; tempoPadrao = 10; 
        break;
        case 2: prato = "Macarrão"; tempoPadrao=8; 
        break;
        case 2: prato = "Carne"; tempoPadrao=15; 
        break;
        case 3: prato = "Feijão"; tempoPadrao=12;
         break;
        case 4: prato = "Brigadeiro"; tempoPadrao=8;
         break;
        default: console.log("Essa não é uma opção válida!");
         return;

    }

    mensagem = `${prato} ta na mesa, ATACAR!!`;
    if(tempo < tempoPadrao) mensagem = "Tempo fraco, não deu certo";
    if(tempo >= tempoPadrao * 2) mensagem = "Queimou!";
    if(tempo >= tempoPadrao * 3) mensagem = "Explodiu!";

    console.log(mensagem);
}

microondas(1,9);
microondas(2,10);
microondas(3,29);
microondas(4,40);
microondas(5,99);
microondas(6,110);
