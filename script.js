//Variavéis que serão usadas durante o script
const contador = document.getElementById('horario')
const botaoFoco = document.getElementById('foco')
const botaoDescanso = document.getElementById('descanso_curto')
const botaoDescansoLongo = document.getElementById('descanso_longo')
const addTarefa = document.getElementById('add-tarefa')
const start = document.getElementById('start')
const minutos = document.getElementById('tempo-minutos')
const segundos = document.getElementById('tempo-segundos')
let iniciado = false;
//funções que serão usadas e chamadas durante o script
function funcaoContador() {
    if(!iniciado){
        start.innerText = 'Pausar';
        let tempoMinutos = parseInt(minutos.value)
        let minutosInt = parseInt (tempoMinutos)
        let tempoSegundos = parseInt(segundos.value)
        let segundosInt = parseInt(tempoSegundos)
        iniciado = true
        const timer = setInterval(function(){
        console.log(tempoSegundos)    
        segundos.value = `${tempoSegundos}`
        minutos.value = `${tempoMinutos}`
        tempoSegundos --;
        if(tempoSegundos < 0){
            tempoSegundos = 59;
            tempoMinutos -= 1;
        }
        
        if(tempoMinutos == -1 && tempoSegundos == 59) {
            tempoSegundos = 0
            tempoMinutos = 0
            segundos.value = `0${tempoSegundos}`
            minutos.value = `0${tempoMinutos}`
            iniciado = false;
            clearInterval(timer)
            start.innerText = 'Começar'
        }   
        }, 1000)   
}
}

function funcaoAdicionar() {
    if(!iniciado){
        const divTarefas = document.querySelector('.container-adicionar')
        const divAdicionar = document.createElement('div')
        divAdicionar.classList.add('inserir-tarefa')
        divAdicionar.innerHTML = `<h1>Teste</h1>`
        divTarefas.appendChild(divAdicionar)
    }
    
}   

//uso das funções nos botões
start.addEventListener("click", funcaoContador)
addTarefa.addEventListener("click", funcaoAdicionar)