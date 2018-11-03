

function addEvento(){
    let botao = document.getElementById("btn");
    botao.addEventListener("mouseout",function (){
        botao.style.cursor = "pointer";
        botao.style.color = "white";
    });

    botao.addEventListener("mouseover",function (){
        botao.style.cursor = "pointer";
        botao.style.color = "blue";
    });
}

function NumeroAleatorio() {

    let num;
    let rand;
    let count = 0;
    let numTentativas = 5;
    
    let resultado = document.getElementById("numero");
    let resposta = document.getElementById("resposta");

    while(true) {
        rand = Math.floor(Math.random()*20);

        num = parseInt(prompt("Entre com um número: " + "Tentativas: " + (numTentativas - count)));

        count++;

        if(num === rand) {
            resposta.innerHTML = "*********WIN*********"
            break;

        }else if(count === 5){
            resposta.innerHTML = "*********LOOSE***************"
            break;
        }
        
 
    }

    resultado.innerHTML = "Número sorteado foi: " + rand;
}

document.addEventListener("load", NumeroAleatorio);
window.addEventListener("load", addEvento);
