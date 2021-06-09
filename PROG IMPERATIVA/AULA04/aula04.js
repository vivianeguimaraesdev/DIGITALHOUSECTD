// Aula 04 - 08/06/2021
// Condicional Simples / Composta


let login = "umcachorro";
let senha = 123;
let acesso = true;

if (login == "gato"){
    console.log("Acesso Permitido")
} else {
    console.log("Acesso Negado!")
}

// If Composto 
if (login == true && senha == 123 && acesso == true){
    console.log("Acesso Permitido")
} else {
    console.log("Acesso negado")
}