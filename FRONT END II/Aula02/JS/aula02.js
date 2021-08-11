let situacao = confirm("Para acessar o Sistema - pressione OK");

if (situacao){
    //redirecionar o usuario para a página de acesso permitido
    window.location.href = "acessoPermitido.html";
} else {
    window.location.href = "acessoNegado.html"
}