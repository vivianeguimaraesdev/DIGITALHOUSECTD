//Jokenpo - Pedra, Papel e Tesoura

function jogar() {
    //validação dos buttons 
    if ((document.getElementById('pedra').checked === false) && (document.getElementById('papel').checked === false) && (document.getElementById('tesoura').checked === false)) {
        alert('Selecione uma opção')
    } else {
        let sorteio = Math.floor(Math.random() * 3)
        switch (sorteio) {
            case 0:
                document.getElementById('pc').src = './img/pcpedra.png'
                break
            case 1:
                document.getElementById('pc').src = './img/pcpapel.png'
                break
            case 2:
                document.getElementById('pc').src = './img/pctesoura.png'
                break
        }

        //Verificar o vencedor ou declarar empate
        if ((document.getElementById('pedra').checked === true && sorteio === 0) || (document.getElementById('papel').checked === true && sorteio === 1) || (document.getElementById('tesoura').checked === true && sorteio === 2)) {
            document.getElementById('resultado').innerText = 'EMPATE'
        } else if ((document.getElementById('pedra').checked === true && sorteio === 2) || (document.getElementById('papel').checked === true && sorteio === 0) || (document.getElementById('tesoura').checked === true && sorteio === 1)) {
            document.getElementById('resultado').innerText = 'Jogador Venceu'
        } else {
            document.getElementById('resultado').innerText = 'Computador Venceu'
        }
    }

}

//Resetar o game 
function resetar() {
    document.getElementById('pc').src = 'img/pc.png'
    document.getElementById('resultado').innerText = ''
}